import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const components = {
    Alert: {
        variants: {
            solid: {
                container: {
                    borderRadius: 0,
                    rounded: 0
                }
            }
        }
    }
};

export const theme = extendTheme({
    config,
    components,
    // styles: {
    //     global: {
    //         html: {
    //             overflowY: 'scroll',
    //             scrollbarColor: '#212121 black',
    //             scrollbarWidth: 'thin'
    //         }
    //     }
    // }
});