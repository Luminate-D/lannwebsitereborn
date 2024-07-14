import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Flex, Image } from '@chakra-ui/react';
import { theme } from './theme';
import { MainPage } from './pages/MainPage';
import { Header } from './header/header';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <Flex direction={'column'} w={'100%'} h={'100%'}>
        <Header />
        <MainPage />
    </Flex>;
}

root.render(
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
);