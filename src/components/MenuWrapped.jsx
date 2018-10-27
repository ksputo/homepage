import React from 'react';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';
import { NavLink } from 'react-router-dom';

export default ({ children }) =>
    <React.Fragment>
        <Menu responsive={true}
            icon={<MenuIcon />}
            inline={false}
            primary={true}
            className='app-container__menu'
            size='small'>
            <Anchor>
                <NavLink to='/'>Strona główna</NavLink>
            </Anchor>
            <Anchor>
                <NavLink to='/kamraci'>Wydarzenia naszych kamratów</NavLink>
            </Anchor>
        </Menu>
        {children}
    </React.Fragment>