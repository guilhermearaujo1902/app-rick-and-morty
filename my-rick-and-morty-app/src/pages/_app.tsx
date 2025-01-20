import React from 'react';
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import Head from "next/head";

import { store } from "@/store/store";
import { AppHeader } from "@/components";
import "../styles/globals.css";
import "../styles/main.css";

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <Head>
                <title>App Rick n Morty</title>
            </Head>
            <AppHeader />
            <Component {...pageProps} />
        </QueryClientProvider>
    </Provider>
);

export default MyApp;
