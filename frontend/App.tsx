import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { theme } from './theme';
import { MainPage } from './pages/MainPage';
import { Header } from './header/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FeedbacksPage } from './pages/FeedbacksPage';
import { MoonlightPage } from './pages/MoonlightPage';
import { Authorizer } from './pages/Authorizer';
import { Provider } from 'react-redux';
import { store } from './state/store';
import { AnimePage } from './pages/AnimePage';
import { JokergePage } from './pages/JokergePage';

const root = createRoot(document.getElementById('root')!);

function App() {
    return <Flex direction={'column'} w={'100%'} h={'100%'}>
        <Header />
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/kekw'} element={<MoonlightPage />} />
            <Route path={'/jokerge'} element={<JokergePage />} />
            {/*<Route path={'/anime'} element={<AnimePage />} />*/}
            {/*<Route path={'/feedbacks'} element={<FeedbacksPage />} />*/}

            {/*<Route path={'/authorize'} element={<Authorizer />} />*/}

            <Route path={'*'} element={<MainPage />} />
        </Routes>
    </Flex>;
}

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </BrowserRouter>
    </Provider>
);