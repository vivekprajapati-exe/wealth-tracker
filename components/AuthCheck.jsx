import { checkUser } from "@/lib/checkUser"

export async function AuthCheck() {
    try {
        const user = await checkUser();
        console.log("AuthCheck completed:", user ? "User found/created" : "No user");
    } catch (error) {
        console.error("AuthCheck failed:", error);
    }
    return null;
}