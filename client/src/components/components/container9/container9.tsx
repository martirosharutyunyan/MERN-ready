import React, { useState, useEffect, useMemo, useRef, memo, FC, } from 'react';
import { Route, Switch, NavLink, Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
// import Media from '../../media';
import './container9.scss';
import { post } from '../../AxiosPost/AxiosPost';
import 'react-scroll';
//types
import { Redux } from '../../types/types';

let Container9:FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {

    }, []);

    const [state, setState] = useState('');

    const arr = useSelector((state:Redux) => state.Reducer1.arr);

    return (
        <>
            <section className='container9'>
                
            </section>
        </>
    )
}

export default Container9 = memo(Container9);

        