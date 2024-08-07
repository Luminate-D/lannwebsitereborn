import React, { PropsWithChildren } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

export function TechStack() {
    return <Flex mx={10} my={10} px={10} py={5} bgColor={'#0006'} gap={'2em'} wrap={'wrap'} w={'auto'} justify={'center'}>
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
        {/*<HCaptcha sitekey={'389c9214-af3a-452c-8504-dc58676c3b7a'} onVerify={captchaVerify} />*/}
    </Flex>
}

function captchaVerify(token: string) {
    console.log("VERIFIED CAPTCHA:", token);
}

function TechStackItem(props: PropsWithChildren & { name: string }) {
    return <Flex direction={'column'} align={'center'} w={'100%'} px={5} flex={'1'}>
        <Text fontWeight={'extrabold'} color={'blue.400'} fontSize={'3xl'} whiteSpace={'nowrap'}>{props.name}</Text>
        <Flex direction={'column'} fontFamily={'Roboto'} w={'100%'}>
            {props.children}
        </Flex>
    </Flex>
}