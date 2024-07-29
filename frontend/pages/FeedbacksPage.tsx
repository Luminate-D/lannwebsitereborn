import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';

export function FeedbacksPage() {
    return <Flex w={'100%'} h={'100%'} align={'center'} py={15} direction={'column'}>
        <Flex w={'100%'} justify={'center'} gap={5} my={5}>
            <Text fontSize={'4xl'} lineHeight={'1em'} fontWeight={'bold'}>Feedbacks</Text>
            <Button>Leave Feedback</Button>
        </Flex>
        <Flex justify={'center'} w={'540px'} direction={'column'} gap={5}>
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
            <Feedback />
        </Flex>
    </Flex>
}

function Feedback() {
    return <Flex w={'100%'}>
        <Image src={'https://cdn.lanny.dev/images/services/Discord.jpg'} w={'3em'} h={'3em'} borderRadius={'50%'} mr={3}/>
        <Flex w={'100%'} h={'100%'} direction={'column'} justify={'space-between'}>
            <Flex w={'100%'} justify={'space-between'}>
                <Text fontWeight={'bold'} lineHeight={'1em'}>C6OI</Text>
                <Text fontSize={'sm'} lineHeight={'1em'}>Today, at 20:43</Text>
            </Flex>
            <Text>{' testing test'.repeat(20)}</Text>
        </Flex>
    </Flex>
}