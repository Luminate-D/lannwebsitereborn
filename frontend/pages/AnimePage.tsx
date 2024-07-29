import React from 'react';
import { Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';

export function AnimePage() {
    return <Flex w={'100%'} h={'100%'} align={'center'} py={15} direction={'column'}>
        <Flex w={'100%'} justify={'center'} gap={5} my={5}>
            <Text fontSize={'4xl'} lineHeight={'1em'} fontWeight={'bold'}>I Watched</Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
        </SimpleGrid>
    </Flex>
}

function Feedback() {
    return <Flex direction={'column'}>
        <Image src={'NO YET IMAGE'} w={'400px'}  h={'110px'} borderRadius={5} />
        <Flex direction={'column'}>
            <Text fontWeight={'bold'} fontSize={'lg'}># Season 1 [EP001-EP220]</Text>
            <Text fontWeight={'bold'} fontSize={'lg'}># Season 2 [EP001-EP500]</Text>
            <Text fontWeight={'bold'} fontSize={'lg'}># Season 3 [EP001-EP206]</Text>
        </Flex>
    </Flex>
}