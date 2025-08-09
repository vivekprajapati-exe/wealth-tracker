import { db } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { currentUser, auth } from "@clerk/nextjs/server";

export async function GET() {
    try {
        // Get auth state and current user from Clerk
        const { userId } = auth();
        const clerkUser = await currentUser();
        
        // Count users in database
        const userCount = await db.user.count();
        
        // Try to find the current user in database
        const dbUser = clerkUser ? await db.user.findUnique({
            where: {
                clerkUserId: clerkUser.id
            }
        }) : null;

        return NextResponse.json({ 
            success: true, 
            userCount,
            clerkUserPresent: !!clerkUser,
            clerkUserId: clerkUser?.id,
            authUserId: userId,
            userInDatabase: !!dbUser,
            databaseUser: dbUser,
            headers: Object.fromEntries(Request.headers),
        });
    } catch (error) {
        console.error("Database test failed:", error);
        return NextResponse.json({ 
            success: false, 
            error: error.message,
            errorStack: error.stack 
        }, { 
            status: 500 
        });
    }
}