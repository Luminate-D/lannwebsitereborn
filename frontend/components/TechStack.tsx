import React, { PropsWithChildren } from 'react';
import { Flex, Text } from '@chakra-ui/react';

export function TechStack() {
    return <Flex py={5} px={10} bgColor={'#0006'} gap={'2em'}>
        <TechStackItem name={'Web & Frontend'}>
            <Text fontSize={'l'}>– React, Redux (+ Toolkit)</Text>
            <Text fontSize={'l'}>– TypeScript</Text>
            <Text fontSize={'l'}>– Chakra UI (+ styled-components)</Text>
            <Text fontSize={'l'}>– Webpack</Text>
        </TechStackItem>
        <TechStackItem name={'Backend'}>
            <Text fontSize={'l'}>– NodeJS (WebSockets, TS)</Text>
            <Text fontSize={'l'}>– Java + Netty</Text>
            <Text fontSize={'l'}>– C# (.NET)</Text>
            <Text fontSize={'l'}>– Fastify</Text>
        </TechStackItem>
        <TechStackItem name={'Storage'}>
            <Text fontSize={'l'}>– MariaDB</Text>
            <Text fontSize={'l'}>– TypeORM</Text>
            <Text fontSize={'l'}>– Hibernate</Text>
        </TechStackItem>
        <TechStackItem name={'Infrastructure'}>
            <Text fontSize={'l'}>– Arch Linux</Text>
            <Text fontSize={'l'}>– Cloudflare</Text>
            <Text fontSize={'l'}>– Nginx</Text>
            <Text fontSize={'l'}>– Github / Git SCM</Text>
        </TechStackItem>
    </Flex>
}

function TechStackItem(props: PropsWithChildren & { name: string }) {
    return <Flex direction={'column'}>
        <Text fontWeight={'extrabold'} color={'blue.400'} fontSize={'3xl'}>{props.name}</Text>
        <Flex direction={'column'} fontFamily={'Roboto'}>
            {props.children}
        </Flex>
    </Flex>
}