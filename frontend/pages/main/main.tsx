import React, { Fragment } from 'react';

import { Flex, IconButton, Image, Link, Text } from '@chakra-ui/react';
import { calculateMyAge } from '../../utils';
import { FaArrowDown } from 'react-icons/fa';
import { StackCategory } from '../../stack/category';
import { StackItem } from '../../stack/item';
import { Contacts } from './contacts';

export function MainPage() {
    return <Fragment>
        <Image position={'absolute'} top={0} w={'100%'} h={'100vh'} src={'/cdn/images/planets-nawpic-1.jpg'} filter={'brightness(0.4)'} zIndex={-1}></Image>
        <Flex position={'relative'} direction={'column'} width={'100%'} height={'100vh'}>
            <Contacts />
            <Flex direction={'column'} align={'center'} justify={'center'} h={'100%'}>
                <Text
                    bgGradient={'linear(to-r, blue.300, blue.400)'}
                    bgClip={'text'}
                    fontSize={'6xl'}
                    fontWeight={'bold'}>Luminate-D</Text>
                <Description />

                <Text mt={10} fontSize={'2xl'} fontWeight={'bold'}>My technology stack</Text>

                <Flex id={'stack'} justify={'center'} py={5} px={10} gap={10} mt={5} backgroundColor={'#00000067'}>
                    <Flex flexDirection={'column'}>
                        <Text color={'blue.300'} fontWeight={'bold'} fontSize={'xl'}>Web</Text>
                        <Flex flexDirection={'column'}>
                            <Text>– React, Redux (+ Toolkit)</Text>
                            <Text>– TypeScript</Text>
                            <Text>– Webpack</Text>
                            <Text>– Chakra UI</Text>
                            <Text>– Styled Components</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Text color={'blue.300'} fontWeight={'bold'} fontSize={'xl'}>Backend</Text>
                        <Flex flexDirection={'column'}>
                            <Text>– NodeJS</Text>
                            <Text>– Java + Netty</Text>
                            <Text>– C# (.NET)</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Text color={'blue.300'} fontWeight={'bold'} fontSize={'xl'}>Storage</Text>
                        <Flex flexDirection={'column'}>
                            <Text>– MariaDB</Text>
                            <Text>– TypeORM</Text>
                            <Text>– Hibernate</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection={'column'}>
                        <Text color={'blue.300'} fontWeight={'bold'} fontSize={'xl'}>Infrastructure</Text>
                        <Flex flexDirection={'column'}>
                            <Text>– Arch Linux</Text>
                            <Text>– Cloudflare</Text>
                            <Text>– Nginx</Text>
                            <Text>– Github & Git SCM</Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex w={'100%'} justify={'center'} align={'center'} py={5}>
                <a href={'https://discord.gg/bEZ8hH2c5G'}>
                    <Image src={'/cdn/images/ebat.webp'} transition={'50ms'} w={'3em'} h={'3em'} _hover={{
                        filter: 'drop-shadow(0 0 0.5em #8f6900)'
                    }} />
                </a>
            </Flex>
        </Flex>
    </Fragment>;
}

function Age() {
    return <Text as={'span'}
                 fontSize={'2xl'}
                 color={'green.400'}
                 fontWeight={'bold'}>{calculateMyAge()}</Text>;
}

function Description() {
    return <Text fontFamily={'Comfortaa'} fontSize={'xl'} textAlign={'center'}>
        Hello! I am{" "}<Age />{" "}years old, i love programming & developing software
        <Text fontSize={'xl'}>
            I want to work as software engineer
        </Text>
    </Text>;
}