import React, { useState, useEffect } from 'react';
import { Route, Switch, NavLink, Link,Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//types
import { Redux } from '../types/types';

function Routs():JSX.Element {
    
    const dispatch = useDispatch()

    const redux = useSelector((state:Redux) => state.Reducer1)

    return (
        <>
            {/* Route*? */}
            <Redirect to='/' />
        </>
    )
}
export default Routs
