import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { supabase } from "./supabase";

export const useAuth = () => {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        const currentSession = supabase.auth.getSession();
        currentSession.then(({ data }) => {
            setSession(data.session);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    return session;
};