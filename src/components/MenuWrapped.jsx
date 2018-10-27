import React from 'react';
import Menu from 'grommet/components/Menu';
import MenuIcon from 'grommet/components/icons/base/Menu';
import Anchor from 'grommet/components/Anchor';
import { NavLink } from 'react-router-dom';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import { Action } from 'rxjs/internal/scheduler/Action';

export default ({ children }) =>
    <React.Fragment>
        <Header fixed={true}
            float={false}
            className='app-container__menu'
            splash={false}>
            <Box
            align='center'
            
    direction='row'
    wrap={false}
    responsive={false}>
            <Menu responsive={true}
                label='Menu'
                icon={<MenuIcon />}
                inline={false}
                primary={true}
                size='small'>
                <NavLink to='/'>
                    <Anchor>Strona główna</Anchor>
                </NavLink>
                <NavLink to='/kamraci'>
                    <Anchor>Wydarzenia naszych kamratów</Anchor>
                </NavLink>
            </Menu>
            <Menu responsive={true}
            label='Język'
            icon={<MenuIcon />}
            size='small'
            >
            <Anchor>Polski</Anchor>
            <Anchor>English</Anchor>
            </Menu>
            </Box>
        </Header>
        {children}
    </React.Fragment>