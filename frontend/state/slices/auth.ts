import { createSlice } from '@reduxjs/toolkit';
import { User } from 'discord-oauth2';

export enum AuthState {
    Loading,
    NotAuthorized,
    Authorized
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        state: AuthState.Loading,
        user: {} as User
    },
    reducers: {
        authorize: (state, action) => void (state.user = action.payload),
        setState: (state, action) => void (state.state = action.payload),

    }
});

const { actions, reducer } = authSlice;
export const { authorize, setState } = actions;
export default reducer;