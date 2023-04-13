import React, { PropsWithChildren } from 'react';
import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

export interface IStackCategory extends PropsWithChildren {
    title: string;
}

export function StackCategory(props: IStackCategory) {
    return <Flex flexDirection={'column'} align={'center'}>
        <Flex align={'center'} justify={'center'}>
            <Text fontSize={'5xl'} fontWeight={'bold'}>{props.title}</Text>
        </Flex>
        <SimpleGrid justifyContent={'center'} mt={10} columns={2} spacing={20} px={20}>
            {props.children}
        </SimpleGrid>
    </Flex>
}