import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import customTheme from '@/styles/theme';
import DefaultSeo from '@/components/app/DefaultSeo';

import '@fontsource/roboto';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
