/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import type { AppProps } from "next/app";
import { Header } from "@atomic/org.header";
import { Footer } from "@atomic/org.footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import { GlobalsWrapper } from "@app/modules/components/globals-wrapper.component";
import { GlobalStore } from "@app/core/global-store.service";
import { useHideOverflowStore } from "@app/providers/hide.overflow.store";
import { useFlashStore } from "app/providers/flash.message.store";
import { ApolloProvider } from "@apollo/client";
import { client } from "app/core/graphql/apollo-client";
import {
  ColumnComponents,
  ColumnSideMenu,
  WrapperPage,
} from "@atomic/obj.grid/grid";
import { SideMenu } from "@app/modules/private-area/side-menu/side-menu.component";
import { MobilePrivateMenu } from "@app/modules/private-area/mobile-menu/mobile-private-menu.component";
import * as gtag from "../../lib/gtag";

function MyApp({ Component, pageProps }: AppProps) {
  const [logged, setLogged] = useState<boolean>();

  const router = useRouter();
  const isLogged = parseCookies()?.jwt ? true : false;

  useEffect(() => {
    if (isLogged) {
      setLogged(isLogged);
    }
  }, [isLogged]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Arbos Food</title>
        <meta property={"og:title"} content={"Arbos Food"} />
        <meta property={"og:type"} content={"website"} />
        <meta property={"og:url"} content="https://www.arbosfood.com.br/" />
        <meta
          property="og:description"
          content={"Sua alimentação saudável. Mais prática e barata."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name={"description"}
          content={
            "A Arbos é uma startup fundada por ex-alunos da USP apaixonados por alimentação, saúde e tecnologia. Sua missão é melhorar a qualidade de vida das pessoas, fornecendo alimentos saudáveis, frescos e baratos."
          }
        ></meta>
        <meta
          name="facebook-domain-verification"
          content="gzipucrs7q08idtcsd20jjqlicw6oo"
        />
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"32x32"}
          href={"/favicon-32x32.png"}
        />
        <link
          rel={"icon"}
          type={"image/png"}
          sizes={"16x16"}
          href={"/favicon-16x16.png"}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ApolloProvider client={client}>
        <GlobalStore stores={[useFlashStore, useHideOverflowStore]}>
          <GlobalsWrapper>
            {logged ? (
              <>
                <WrapperPage>
                  <ColumnSideMenu>
                    <SideMenu />
                  </ColumnSideMenu>
                  <ColumnComponents>
                    <MobilePrivateMenu />
                    <Component {...pageProps} />
                  </ColumnComponents>
                </WrapperPage>
              </>
            ) : (
              <>
                <Header />
                <Component {...pageProps} />
                <Footer />
              </>
            )}
          </GlobalsWrapper>
        </GlobalStore>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
