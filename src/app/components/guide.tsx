"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "./button";

const Guide: React.FC = () => {
    const router = useRouter();
    const handleBackToCard = () => {
        router.push(`/card`);
    };

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-10 p-6">
            {/* Card */}
            <div className="w-[90%] max-w-2xl border-2 border-gray-400 rounded-sm shadow-xl bg-white p-6">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                    Guideline for Exporting to Apple Wallet (iOS Only)
                </h2>
                <ol className="list-decimal list-inside text-lg text-gray-800 space-y-4">
                    <li>
                        In order to save your eBusiness card to your wallet, you must be on Desktop and in Microsoft Edge Compatibility mode
                        (In Microsoft Edge, click the 3 dots in the top right corner, click More Tools, then click{" "}
                        <span className="font-semibold">&quot;Open Sites in Microsoft Edge&quot;</span>).
                    </li>
                    <li>
                        Find the exported <code className="font-semibold">.pkpass</code> file in your Downloads folder.
                    </li>
                    <li>
                        Attach the <code className="font-semibold">.pkpass</code> file to an email and send this to your personal email account.
                        Be sure to mark the file sensitivity as <span className="font-semibold">&quot;INTERNAL&quot;</span> and the subject as <span className="font-semibold">&quot;INTERNAL&quot;</span>.
                    </li>
                    <li>
                        Open the <code className="font-semibold">.pkpass</code> file from your personal email on your mobile device; it will import directly to your Apple Wallet.
                    </li>
                    <li>
                        You will need to go through this process again if you change your title, contact details, or address; otherwise, it is a convenient one-time method to store your eBusiness Card.
                    </li>
                    <li>
                        Note: The <code className="font-semibold">.pkpass</code> file is only compatible with iOS. We are working on compatibility for Android, which will be available in a future release.
                    </li>
                </ol>
            </div>

            {/* Button below the card */}
            <div className="mt-4">
                <Button onClick={handleBackToCard} text="Back to Card" />
            </div>
        </div>
    );
};

export default Guide;
