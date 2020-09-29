import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider,
  useColorMode
} from '@chakra-ui/core';
import { css, Global } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import React from 'react';
import SEO from '../../next-seo.config';
import MDXComponents from '../components/MDXComponents';
import { prismDarkTheme, prismLightTheme } from '../styles/prism';
import theme from '../styles/theme';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="dark">
          <GlobalStyle>
            <Head>
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;