import React from 'react';
import { Button, Image, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IRootState } from '../state/store';

export function UserInfo() {
    const user = useSelector((state: IRootState) => state.auth.user);

    return <Button my={2} py={1} gap={2} w={'min-content'}>
        <Image ml={2} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.webp`} borderRadius={'50%'} h={'100%'} />
        <Text mr={2}>@{user.username}</Text>
    </Button>
}