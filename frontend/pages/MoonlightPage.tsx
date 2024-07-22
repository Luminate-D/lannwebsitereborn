import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Text } from '@chakra-ui/react';

export function MoonlightPage() {
    const vidRef = useRef<HTMLVideoElement>(null);
    const [ ip, setIp ] = useState('192.168.1.1');
    const [ active, setActive ] = useState(false);

    useEffect(() => {
        if(vidRef.current) vidRef.current.muted = true;
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(res => setIp(res.ip));
    }, []);

    useEffect(() => {
        if(active && vidRef.current) {
            vidRef.current.play();
            vidRef.current.muted = false;
        }
    });

    return <Flex w={'100%'} h={'100%'} justify={'center'} pt={5}>
        <Box position={'fixed'} top={0} left={0} w={'100%'} h={'100%'} zIndex={-1} userSelect={'none'} pointerEvents={'none'}>
            <Box
                as={'video'}
                src={'https://cdn.lanny.dev/moonlight.mp4'}
                loop width={'100%'} height={'100%'}
                top={0} left={0} objectFit={'cover'}
                ref={vidRef}
            />
        </Box>
        <Box mt={10}>
            {active ?
                <Text fontWeight={'bold'}
                      fontSize={'6xl'}
                      color={'red'}
                      textShadow={'-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'}>{ip}</Text> :
                <Button onClick={() => setActive(true)}
                        size={'lg'}
                        colorScheme={'yellow'}
                        variant={'solid'}>Click me!</Button>}
        </Box>
    </Flex>
}
