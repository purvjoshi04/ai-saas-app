"use client";

import { Button } from "@/components/ui/button";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import axios from "axios";
import { useState } from "react";

interface SubscriptionButtonProps {
    isPro: boolean;
}


export const SubscriptionButton = ({
    isPro = false,
}: SubscriptionButtonProps) => {
    const [loading, setLoading] = useState(false);

    const onClick = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");

            window.location.href = response.data.url;
        } catch (error) {
            console.log("BILLING ERROR", error);
        } finally {

        }
    }

    return (
        <Button disabled={loading} variant={isPro ? "default" : "premium"} onClick={onClick}>
            {isPro ? "Manage Subscription" : "Upgrade"}
            {!isPro && <ElectricBoltIcon className="w-4 h-4 ml-2 fill-white" />}
        </Button>
    )
}