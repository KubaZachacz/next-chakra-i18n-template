import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';
import customTheme from '@/styles/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Next.js + Chakra UI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Next.js + Chakra UI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <ColorModeScript
          initialColorMode={customTheme.config?.initialColorMode}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
