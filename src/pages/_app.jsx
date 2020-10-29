import React, {useState} from 'react';
import {Context} from '../Context'
import Head from 'next/head'
import Header from "../components/headerComponent/Header";
import Footer from "../components/footerComponent/Footer";

import { createGlobalStyle } from 'styled-components';
import { AppContainer, MainContainer, Background } from '../components/CustomAppStyled';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }
`


function App ({ Component, pageProps }) {


    return (
        <>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"/>
                <title>Brave developers terminal</title>
            </Head>
            <GlobalStyle/>
            <Context.Provider value={{}}>
                <AppContainer>
                    <Header/>
                    <MainContainer>
                        <Component {...pageProps} />
                    </MainContainer>
                    <Footer/>
                </AppContainer>
            </Context.Provider>
        </>
    )
}

export default App