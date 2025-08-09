import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkUser = async () => {
    try {
        const user = await currentUser();
        
        if (!user) {
            console.log("No user found from Clerk");
            return null;
        }

        console.log("Clerk user found:", user.id);

        const loggedInUser = await db.user.findUnique({
            where: {
                clerkUserId: user.id,
            },
        });

        if (loggedInUser) {
            console.log("Existing user found in database:", loggedInUser.id);
            return loggedInUser;
        }

        const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();
        const email = user.emailAddresses[0]?.emailAddress;

        if (!email) {
            console.error("No email address found for user");
            return null;
        }

        console.log("Creating new user in database...");
        const newUser = await db.user.create({
            data: {
                clerkUserId: user.id,
                name: name || 'Anonymous User',
                imageUrl: user.imageUrl,
                email: email,
            }
        });

        console.log("New user created:", newUser.id);
        return newUser;

    } catch (error) {
        console.error("Error in checkUser:", error);
        // Log the full error stack
        console.error(error.stack);
        return null;
    }
}

