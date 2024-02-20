"use client";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useState, useEffect } from "react";

export default function SolConnectWrapper() {
  const [solanaPresent, setSolanaPresent] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSolanaPresent(true);
    }
  }, []);

  return solanaPresent ? (
    <WalletMultiButton
      style={{
        backgroundColor: "black",
        color: "white",
      }}
      className="w-64 h-16 rounded-lg text-violet-600 font-bold"
    />
  ) : (
    <p>Install solana wallet</p>
  );
}
