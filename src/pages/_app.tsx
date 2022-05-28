import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/App.css';

import React, { useMemo } from 'react';

import { HavanaProvider } from 'havana-react-hooks';
import type { AppProps } from 'next/app';

import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  ConnectionProvider,
  useConnection,
  useWallet,
} from '@solana/wallet-adapter-react';

import WalletProvider from '../contexts/ClientWalletProvider';

const SOLANA_NETWORK = WalletAdapterNetwork.Mainnet;

function MyApp({ Component, pageProps }: AppProps) {
  const endpoint = useMemo(() => "https://ssc-dao.genesysgo.net/", []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider>
        <JupiterWrapper>
          <Component {...pageProps} />
        </JupiterWrapper>
      </WalletProvider>
    </ConnectionProvider>
  );
}

const JupiterWrapper: React.FC = ({ children }) => {
  const { connection } = useConnection();
  const wallet = useWallet();
  return (
    <HavanaProvider
      cluster="mainnet-beta"
      connection={connection}
      userPublicKey={wallet.publicKey || undefined}
      routeCacheDuration={0}
    >
      {children}
    </HavanaProvider>
  );
};

export default MyApp;
