import React, { useEffect } from 'react';
import { Button, Flex, Link, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../state/store';
import { authorize, AuthState, setState } from '../state/slices/auth';
import { UserInfo } from './UserInfo';

export function Header() {
    // const authState = useSelector((state: IRootState) => state.auth.state);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     const token = localStorage.getItem('access_token');
    //     if(authState == AuthState.Loading) {
    //         if(!token) {
    //             dispatch(setState(AuthState.NotAuthorized));
    //             return;
    //         }
    //
    //         fetch('https://discord.com/api/v9/users/@me', {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
    //             .then(res => {
    //                 if(res.status != 200) return Promise.reject(res);
    //                 return res.json();
    //             }).then(res => {
    //                 console.log(res);
    //                 dispatch(authorize(res));
    //                 dispatch(setState(AuthState.Authorized));
    //             }).catch(err => {
    //                 console.log('Bearer access_token failed:', err);
    //                 localStorage.clear();
    //                 dispatch(setState(AuthState.NotAuthorized));
    //             });
    //     }
    // }, []);

    return <Flex align={'center'} zIndex={1} w={'100%'} minH={'7.5%'} px={3} bg={'#18181b'}>
        <Link position={'absolute'} left={'50%'} transform={'translateX(-50%)'} href={'https://www.standwithukraine.how/'} style={{ textDecoration: 'none' }}>
                <Text
                    bgGradient="linear(to-b, #1759ff, #1759ff, #1759ff, #1759ff, #fcf921, #fcf921, #fcf921)"
                    filter={'brightness(1.5)'}
                    bgClip={'text'}
                    fontSize={'2xl'}
                    fontWeight={'bold'}
                    userSelect={'none'}>#StandWithUkraine</Text>
        </Link>
        {/*<Flex ml={'auto'}>*/}
        {/*    {authState == AuthState.Loading ? <Text>Loading...</Text> : <></>}*/}
        {/*    {authState == AuthState.NotAuthorized ? <Button onClick={() => {*/}
        {/*        window.open('https://discord.com/oauth2/authorize?client_id=975438348019707904&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A2024%2Fauthorize&scope=identify',*/}
        {/*            'newwindow',*/}
        {/*            'width=480,height=620');*/}
        {/*    }}>Login via Discord</Button> : <></>}*/}
        {/*    {authState == AuthState.Authorized ? <UserInfo /> : <></>}*/}
        {/*</Flex>*/}
    </Flex>
}