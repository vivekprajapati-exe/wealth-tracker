"use client"
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export function AuthTest() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (isLoaded) {
      console.log("Clerk Auth Status:", {
        isLoaded,
        userId: user?.id,
        userEmail: user?.primaryEmailAddress?.emailAddress
      });
    }
  }, [isLoaded, user]);

  return null;
}