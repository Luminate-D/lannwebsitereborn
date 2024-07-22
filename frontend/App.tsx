import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from './theme';
import { MainPage } from './pages/MainPage';
import { Header } from './header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FeedbacksPage } from './pages/FeedbacksPage';
import { MoonlightPage } from './pages/MoonlightPage';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <Flex direction={'column'} w={'100%'} h={'100%'}>
        <Header />
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/kekw'} element={<MoonlightPage />} />
            {/*<Route path={'/feedbacks'} element={<FeedbacksPage />} />*/}

            <Route path={'*'} element={<MainPage />} />
        </Routes>
    </Flex>;
}

root.render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);