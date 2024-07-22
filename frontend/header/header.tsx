import React from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';

export function Header() {
    return <Flex align={'center'} zIndex={1} w={'100%'} minH={'7.5%'} px={3} bg={'#18181b'}>
        <Link position={'absolute'} left={'50%'} transform={'translateX(-50%)'} href={'https://www.standwithukraine.how/'} style={{ textDecoration: 'none' }}>
                <Text
                    bgGradient="linear(to-b, #1759ff, #1759ff, #1759ff, #1759ff, #fcf921, #fcf921, #fcf921)"
                    filter={'brightness(1.5)'}
                    bgClip={'text'}
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    userSelect={'none'}>#StandWithUkraine</Text>
        </Link>
        {/*<Button onClick={() => {*/}
        {/*    window.open('https://discord.com/oauth2/authorize?client_id=975438348019707904&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A2023%2Fauthorize&scope=identify',*/}
        {/*        'newwindow',*/}
        {/*        'width=480,height=620');*/}
        {/*}}>Login via Discord</Button>*/}
    </Flex>
}