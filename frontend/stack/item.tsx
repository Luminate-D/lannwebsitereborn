import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

export interface IStackItem {
    image: string;
    title: string;
    description: string;
}

export function StackItem(props: IStackItem) {
    return <Flex>
        <Flex direction={'column'}>
            <Image src={props.image} w={'3em'} minW={'3em'}></Image>
        </Flex>
        <Flex direction={'column'}>
            <Text ml={5} fontSize={'2xl'} fontWeight={'bold'} lineHeight={'1em'} borderRadius={0}>{props.title}</Text>
            <Text ml={5} fontSize={'md'} borderRadius={0}>{props.description}</Text>
        </Flex>
    </Flex>
}