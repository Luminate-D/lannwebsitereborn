import React, { Fragment } from 'react';

import { Flex, IconButton, Image, Link, Text } from '@chakra-ui/react';
import { calculateMyAge } from '../../utils';
import { FaArrowDown } from 'react-icons/fa';
import { StackCategory } from '../../stack/category';
import { StackItem } from '../../stack/item';
import { Contacts } from './contacts';

export function MainPage() {
    return <Fragment>
        <Image position={'absolute'} top={0} w={'100%'} h={'100vh'} src={'https://www.nawpic.com/media/2020/planets-nawpic-1.jpg'} filter={'blur(2vh) brightness(0.6)'} zIndex={-1}></Image>
        <Flex position={'relative'} direction={'column'} width={'100%'} height={'100vh'}>
            <Contacts />
            <Flex direction={'column'} align={'center'} justify={'center'} h={'100%'}>
                <Text
                    bgGradient={'linear(to-r, blue.300, blue.400)'}
                    bgClip={'text'}
                    fontSize={'6xl'}
                    fontWeight={'bold'}>Luminate-D</Text>
                <Text fontFamily={'Comfortaa'} fontSize={'xl'} textAlign={'center'}>
                    Hello! I am{" "}
                    <Text as={'span'}
                          fontSize={'xl'}
                          color={'green.300'}
                          fontWeight={'extrabold'}>{calculateMyAge()}</Text>
                    {" "}years old, and i love programming & developing software
                    <Text fontSize={'xl'}>
                        I want to work as software engineer abroad
                    </Text>
                </Text>
                <Text mt={4} fontSize={'2xl'} fontWeight={'bold'}>Check out my technology stack below!</Text>
                <Link href={'#stack'} w={'10em'} h={'10em'} mt={20}>
                    <IconButton w={'100%'} h={'100%'} aria-label={'View Technology Stack'} icon={<FaArrowDown size={'7.5em'} />} />
                </Link>
            </Flex>
        </Flex>
        <Flex flexDirection={'column'} id={'stack'} align={'center'} py={20} gap={10}>
            <StackCategory title={'Code Editors'}>
                <StackItem image={'/cdn/images/editors/WebStorm.png'} title={'WebStorm'} description={'Primarily used code editor as its universal and not specified for single language usage, as well, most of my projects are HTML / CSS / TS'} />
                <StackItem image={'/cdn/images/editors/IntellijIdea.png'} title={'Intellij IDEA'} description={'My choice was Intellij IDEA for developing JVM projects (Java / Kotlin), because its the most featured & comfortable IDE'} />
                <StackItem image={'/cdn/images/editors/CLion.png'} title={'CLion'} description={'Since this code editor is designed to be used in C++ projects and i prefer using JetBrains IDEs i chose that for C++'} />
                <StackItem image={'/cdn/images/editors/Rider.png'} title={'Rider'} description={'I\'d chose this rather than VS, because this has way better design, a lot of features and basically the best IDE for C# projects nowadays'} />
            </StackCategory>
            <StackCategory title={'Languages'}>
                <StackItem image={'/cdn/images/languages/TypeScript.png'} title={'TypeScript'} description={'My primarily used coding language. Most of my projects are made with it, because it is universal language that i can use both for frontend and backend.'} />
                <StackItem image={'/cdn/images/languages/CS.png'} title={'C# / C++'} description={'C# is my secondary language that i use for desktop applications, mostly for remote access toolkits for educational purposes. C++ i use whenever i need to do some high performance tasks.'} />
                <StackItem image={'/cdn/images/languages/Java.png'} title={'Java'} description={'Java is used for developing Discord bots and Minecraft Plugins / Mods. Also i have a little experience at developing Android applications.'} />
                <StackItem image={'/cdn/images/languages/HTML.png'} title={'HTML & CSS'} description={'There is nothing to say, used for developing frontend pages. Last time there is no need due to i use UI/UX toolkits and frameworks like Chakra UI or MUI'} />
            </StackCategory>
            <StackCategory title={'Web / Backend'}>
                <StackItem image={'/cdn/images/cweb/React.png'} title={'React'} description={'I use React for every frontend project i have, because its very comfortable and makes it possible to implement lots of features within app.'} />
                <StackItem image={'/cdn/images/cweb/Redux.png'} title={'Redux'} description={'Redux is used for big stateful applications where i need to have shared state and dispatching state changes.'} />
                <StackItem image={'/cdn/images/cweb/Webpack.png'} title={'Webpack'} description={'Always used for packing my projects (sometimes backend also) into single bundle file, very easy-to-use tool.'} />
                <StackItem image={'/cdn/images/cweb/ChakraUI.png'} title={'Chakra UI'} description={'In my opinion - is the one of the best UI frameworks to build applications in React.'} />
                <StackItem image={'/cdn/images/cweb/StyledComponents.png'} title={'Styled Components'} description={'Used for applications / code fragments wherever i do need to put my own styles on whole component / element.'} />
                <StackItem image={'/cdn/images/cweb/Fastify.png'} title={'Fastify'} description={'Fastest REST serving library in NodeJS nowadays, the most easy to use and very flexible REST API building.'} />
            </StackCategory>
            <StackCategory title={'Infrastructure'}>
                <StackItem image={'/cdn/images/infrastructure/Windows.png'} title={'Windows 10'} description={'Primarily used OS for development, because it got better design than linux.'} />
                <StackItem image={'/cdn/images/infrastructure/ArchLinux.png'} title={'Arch Linux'} description={'Used for C++ development and contributing projects, because its more handy for that kind of work'} />
                <StackItem image={'/cdn/images/infrastructure/Cloudflare.png'} title={'Cloudflare'} description={'All my websites are proxied through Cloudflare. This comes in handy when you need to manage DNS and Proxy for your website.'} />
                <StackItem image={'/cdn/images/infrastructure/Nginx.png'} title={'Nginx'} description={'In my opinion its the best reverse proxy for my huge projects that need it'} />
                <StackItem image={'/cdn/images/infrastructure/Git.png'} title={'GitHub & Git SCM'} description={'Best tool to managing your projects and contributing others ones.'} />
            </StackCategory>
        </Flex>
    </Fragment>;
}