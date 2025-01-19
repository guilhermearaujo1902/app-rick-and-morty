import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";

import "../styles/globals.css";
import "../styles/main.css";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
    <QueryClientProvider client={queryClient}>
        <Head>
            <title>App Rick n Morty</title>
        </Head>
        <Component {...pageProps} />
    </QueryClientProvider>
);

export default MyApp;
