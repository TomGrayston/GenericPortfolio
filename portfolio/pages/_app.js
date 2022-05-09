import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';

function MyApp({ Component, pageProps }) {
    return (
    <ChakraProvider>
        <Head>
            <title>
                Dev Person - Software Engineer
            </title>
            <meta
                name="desciption"
                content="Personal Portfolio of Dev Person, a software engineer"
            />
        </Head>
        <Navbar/>
        <Component {...pageProps} />
    </ChakraProvider>
    )
}

export default MyApp