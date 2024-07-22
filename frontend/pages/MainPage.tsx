import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Contacts } from '../components/Сontacts';
import { TechStack } from '../components/TechStack';

export function MainPage() {
    return <Flex direction={'column'} w={'100%'} flex={1} justify={'center'}>
        <Box position={'fixed'} top={0} left={0} w={'100%'} h={'100%'} zIndex={-1}>
            <Box
                as={'video'}
                src='https://cdn.lanny.dev/images/background.mp4'
                loop muted width={'100%'} height={'100%'}
                top={0} left={0} objectFit={'cover'}
                autoPlay
            />
        </Box>
        <Flex direction={'column'} align={'center'} justify={'center'} flex={1} p={3} pt={20} backdropFilter={'brightness(0.5)'}>
            <Text
                bgGradient={'linear(to-r, purple.300, purple.400)'}
                bgClip={'text'}
                fontSize={'5xl'}
                fontWeight={'bold'}>Luminate-D</Text>
            <Text fontFamily={'Comfortaa'} fontSize={'l'} textAlign={'center'}>
                Hello! I am{" "}
                <Text as={'span'}
                      color={'purple.300'}
                      fontFamily={'Segoe UI'}
                      fontSize={'2xl'}
                      fontWeight={'extrabold'}>{calculateMyAge()}</Text>
                {" "}years old, and i love programming & developing software
                <Text fontSize={'l'}>
                    I want to work as software engineer abroad
                </Text>
            </Text>
            <Text mb={-5} fontSize={'2xl'} fontWeight={'bold'}>My technology stack</Text>
            <TechStack />
            <Contacts />
        </Flex>
    </Flex>
}

export function calculateMyAge() {
    const diff = Date.now() - 1170972000000;
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}