import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Image } from '@chakra-ui/react';
import { theme } from './theme';
import { MainPage } from './pages/MainPage';
import { Header } from './header/header';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <>
        <Image position={'absolute'} w={'100%'} h={'100%'} z-index={-1} src={'https://cdn.lanny.dev/images/background.jpg'} filter={'brightness(0.3)'}/>
        <Header />
        <MainPage />
    </>;
}

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);