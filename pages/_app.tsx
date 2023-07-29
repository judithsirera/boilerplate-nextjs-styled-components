import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global.styles';
import Themes from 'styles/theme/lib';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Nextjs Styled Components</title>
        <meta
          name="description"
          content="This is a boilerplate for you to start building your app"
        />
        <meta name="author" content="Judith Sirera" />
      </Head>
      <ThemeProvider theme={Themes.light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
