import { useWalletModal } from "@solana/wallet-adapter-react-ui";

export default function SolConnectBtn() {
  const { setVisible } = useWalletModal();

  const connect = () => {
    setVisible(true);
  };

  return <button onClick={connect}>Connect wallet</button>;
}

// DOESNT WORK
