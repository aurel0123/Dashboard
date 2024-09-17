import React, { useState } from 'react'
import Head from '../head/head';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InvertColorsOutlinedIcon from '@mui/icons-material/InvertColorsOutlined';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import SupportIcon from '@mui/icons-material/Support';
import StyleIcon from '@mui/icons-material/Style';
import './header.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header({ dark, setMode }) {
    const [Mobile, SetMobile] = useState(false)
  return (
    <section className='Header'>
        <Head dark={dark} setMode={setMode}/>
        <header>
            <div className="container">
                <ul className={Mobile ? "MenuList" : "link"} onClick={()=> SetMobile(false)}> 
                    <li>
                        <a href="/" className='navIcon '>
                            <DashboardIcon className='navIcon active'/>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <InvertColorsOutlinedIcon className='navIcon'/>
                        <a href="/">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <WindowOutlinedIcon className='navIcon'/>
                        <a href="/">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <SupportIcon className='navIcon'/>
                        <a href="/">
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <StyleIcon className='navIcon'/>
                        <a href="/">
                            Dashboard
                        </a>
                    </li>
                </ul>
                <button className='toggle' onClick={()=> SetMobile(!Mobile)}>
                    { Mobile ? <CloseIcon className='iconMenu'/> :<MenuIcon className='iconMenu'/>}
                    
                </button>
                    
            </div>
        </header>
    </section>
  )
}

export default Header