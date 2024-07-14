import React from 'react';
import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';
import { useThemedToast } from '../hooks/toast';

export function Header() {
    const toast = useThemedToast();
    return <Flex align={'center'} zIndex={1} w={'100%'} minH={'7.5%'} px={3} bg={'#18181b'}>
        {/*<Button rounded={'sm'} onClick={() => {*/}
        {/*    toast({*/}
        {/*        status: 'error',*/}
        {/*        title: 'API is currently under development'*/}
        {/*    });*/}
        {/*}}>My API</Button>*/}
        <Link position={'absolute'} left={'50%'} transform={'translateX(-50%)'} href={'https://www.standwithukraine.how/'} style={{ textDecoration: 'none' }}>
                <Text
                    bgGradient="linear(to-b, #1759ff, #1759ff, #1759ff, #1759ff, #fcf921, #fcf921, #fcf921)"
                    filter={'brightness(1.5)'}
                    bgClip={'text'}
                    fontSize={'2xl'}
                    fontWeight={'bold'}>#StandWithUkraine</Text>
        </Link>
    </Flex>
}