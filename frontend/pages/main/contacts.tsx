import React from 'react';
import { Flex, IconButton, Image, Link } from '@chakra-ui/react';

export function Contacts() {
    return <Flex position={'absolute'} h={'max-content'} right={'0.5em'} bottom={'0.5em'} gap={'0.5em'}>
        <Contact href={'https://pgp.mit.edu/pks/lookup?op=vindex&search=0x71D1E36680FD6D5E'} image={'/cdn/images/services/GPG.png'} />
        <Contact href={'https://etherscan.io/address/0x3Cdeb2De30dCb1890F199981F94fDc65f8752a85'} image={'/cdn/images/services/Ethereum.png'} />
        <Contact href={'https://t.me/lannts'} image={'/cdn/images/services/Telegram.png'} />
        <Contact href={'https://discord.com/users/814857877637562379'} image={'/cdn/images/services/Discord.jpg'} />
        <Contact href={'https://github.com/Luminate-D'} image={'/cdn/images/services/GitHub.png'} />
        <Contact href={'https://www.hoyolab.com/accountCenter/postList?id=302330787'} image={'/cdn/images/services/GenshinImpact.webp'} />
    </Flex>
}

function Contact(props: { href: string, image: string }) {
    return <Link href={props.href}>
        <IconButton aria-label={'Click to open service'} icon={<Image src={props.image} h={'5vh'} rounded={'sm'}></Image>} />
    </Link>
}