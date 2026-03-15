import { useAuth } from "@/src/services/auth_state";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import Onboard from "./(onboard)/onboard";

export default function Index() {
    const router = useRouter();
    const session = useAuth();

    useEffect(() => {
        if (session) {
            router.push("/(tabs)/home");
        }
    }, [session]);

    return (
        <Onboard />
    );
}