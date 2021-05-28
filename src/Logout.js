import React from 'react'
import {useAuth0 }from '@auth0/auth0-react';
import './logout-style.css'
export const LogoutButton = () =>
{
    const {logout} = useAuth0()
    return (
        <section class="wrapper">
            <button class="btn btn-accept" onClick={()=>logout({returnTo: window.location.origin})}>
                LogOut
                </button>
        </section>
    )
}

