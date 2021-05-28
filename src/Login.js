import React from 'react';
import {useAuth0 }from '@auth0/auth0-react'

export const LoginButton  = () =>
{
    const {loginWithRedirect} = useAuth0()
    return (
        <section class="wrapper">
    <button class="btn btn-accept" onClick={()=> loginWithRedirect()}>
        Login
        </button>
        </section>)
}