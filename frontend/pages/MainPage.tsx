import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Contacts } from '../components/Сontacts';
import { TechStack } from '../components/TechStack';

export function MainPage() {
    return <Flex direction={'column'} w={'100%'} flex={1} justify={'center'}
            background={`url('https://cdn.lanny.dev/images/background.jpg') no-repeat center fixed`}
            backgroundSize={'cover'}>
        <Flex direction={'column'} align={'center'} justify={'center'} flex={1} p={3} pt={20} backdropFilter={'blur(5px) brightness(0.5)'}>
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