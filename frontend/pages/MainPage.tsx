import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Contacts } from '../components/Сontacts';
import { TechStack } from '../components/TechStack';

export function MainPage() {
    return <Flex direction={'column'} w={'100%'} h={'100%'} position={'relative'}>
        <Flex direction={'column'} align={'center'} justify={'center'} h={'100%'}>
            <Text
                bgGradient={'linear(to-r, purple.300, purple.400)'}
                bgClip={'text'}
                fontSize={'6xl'}
                fontWeight={'bold'}>Luminate-D</Text>
            <Text fontFamily={'Comfortaa'} fontSize={'xl'} textAlign={'center'}>
                Hello! I am{" "}
                <Text as={'span'}
                      color={'purple.300'}
                      fontFamily={'Segoe UI'}
                      fontSize={'2xl'}
                      fontWeight={'extrabold'}>{calculateMyAge()}</Text>
                {" "}years old, and i love programming & developing software
                <Text fontSize={'xl'}>
                    I want to work as software engineer abroad
                </Text>
            </Text>
            <Text my={4} fontSize={'2xl'} fontWeight={'bold'}>My technology stack</Text>
            <TechStack />
        </Flex>
        <Contacts />
    </Flex>
}

export function calculateMyAge() {
    const diff = Date.now() - 1170972000000;
    return Math.abs(new Date(diff).getUTCFullYear() - 1970);
}