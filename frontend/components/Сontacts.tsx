import React from 'react';
import { Flex, IconButton, Image, Link } from '@chakra-ui/react';

export function Contacts() {
    return <Flex position={'absolute'} h={'max-content'} right={'1em'} bottom={'1em'} gap={'0.5em'}>
        <Contact href={'https://pgp.mit.edu/pks/lookup?op=vindex&search=0x71D1E36680FD6D5E'} image={'https://cdn.lanny.dev/images/services/GPG.png'} />
        <Contact href={'https://etherscan.io/address/0x3Cdeb2De30dCb1890F199981F94fDc65f8752a85'} image={'https://cdn.lanny.dev/images/services/Ethereum.png'} />
        <Contact href={'https://t.me/lannts'} image={'https://cdn.lanny.dev/images/services/Telegram.png'} />
        <Contact href={'https://discord.com/users/974442399197712384'} image={'https://cdn.lanny.dev/images/services/Discord.jpg'} />
        <Contact href={'https://github.com/Luminate-D'} image={'https://cdn.lanny.dev/images/services/GitHub.png'} />
        <Contact href={'https://www.hoyolab.com/accountCenter/postList?id=302330787'} image={'https://cdn.lanny.dev/images/services/GenshinImpact.webp'} />
    </Flex>
}

function Contact(props: { href: string, image: string }) {
    return <Link href={props.href}>
        <IconButton aria-label={'Click to open'} icon={<Image src={props.image} h={'5vh'} rounded={'sm'}></Image>} />
    </Link>
}