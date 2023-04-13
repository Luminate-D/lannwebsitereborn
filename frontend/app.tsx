import React from 'react';
import {
    ChakraProvider,
} from '@chakra-ui/react';
import { createRoot } from 'react-dom/client';
import { theme } from './theme';
import { Header } from './header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/main/main';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <Routes>
        <Route path={'/'} element={<MainPage />} />
    </Routes>
}

root.render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <Header />
            <App />
        </ChakraProvider>
    </BrowserRouter>
);