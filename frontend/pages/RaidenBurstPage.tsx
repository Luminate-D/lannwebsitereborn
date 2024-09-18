import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, keyframes, Text } from '@chakra-ui/react';

const glowing = keyframes`
    0% {
        text-shadow: 0 0 50px rgba(255, 0, 255, 0.7), 0 0 50px rgba(255, 34, 255, 0.7);
    }
    50% {
        text-shadow: 0 0 100px rgb(214, 106, 214), 0 0 200px rgba(255, 114, 255, 0.8);
    }
    100% {
        text-shadow: 0 0 400px rgba(213, 146, 213, 0.7), 0 0 400px rgba(163, 59, 163, 0.7);
    }
`;


export function RaidenBurstPage() {
    const vidRef = useRef<HTMLVideoElement>(null);
    const [ ip, setIp ] = useState('192.168.1.1');
    const [ active, setActive ] = useState(false);
    const [ show, setShow ] = useState(false);


    useEffect(() => {
        if(vidRef.current) vidRef.current.muted = true;
        fetch('https://api.ipify.org/?format=json')
            .then(res => res.json())
            .then(res => setIp(res.ip));
    }, []);

    useEffect(() => {
        if(show && vidRef.current) {
            setTimeout(() => setActive(true), 1800);
            vidRef.current.play();
            vidRef.current.muted = false;
        }
    });

    return <Flex w={'100%'} h={'100%'} justify={'center'} pt={5}>
        <Box position={'fixed'} top={0} left={0} w={'100%'} h={'100%'} zIndex={-1} userSelect={'none'} pointerEvents={'none'}>
            <Box
                as={'video'}
                src={'https://cdn.lanny.dev/burst.mp4'}
                width={'100%'} height={'100%'}
                top={0} left={0} objectFit={'cover'}
                ref={vidRef}
            />
        </Box>
        <Box mt={10}>
            {active ? <Text fontWeight={'bold'}
                            fontSize={'10em'}
                            color={'rgb(186,0,255)'}
                            mt={'auto'}
                            mb={'auto'}
                            sx={{
                                textShadow: `
        0 0 5px rgba(128, 0, 128, 0.7), 
        0 0 10px rgba(128, 0, 128, 0.7)
      `,
                                animation: `${glowing} 0.4s ease-in`,
                    }}>{ip}</Text> : <></>}

            {!show ? <Button onClick={() => {
                    setShow(true);
                }}  size={'lg'}
                    mt={'200%'}
                    colorScheme={'yellow'}
                    variant={'solid'}>Click me!</Button> : <></>}
        </Box>
    </Flex>
}
