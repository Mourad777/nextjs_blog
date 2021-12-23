import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import classes from './navbar.module.css'
import HeaderPic from '../public/assets/images/header-pic.webp'

export default function Navbar() {

    useEffect(() => {

        window.addEventListener('scroll', stickyHeader);
        return () => {
            window.removeEventListener('scroll', stickyHeader);
        }
    }, [])

    const [isFixed, setIsFixed] = useState(true);

    const stickyHeader = () => {
        const windowSize = window.scrollY;
        const isStickyHeader = (windowSize > 100);
        // setIsFixed(isStickyHeader);
    }

    return (
        <header className={classes.header}>
            <div className={[classes.nav, isFixed ? classes['fixed-nav'] : classes['scroll-nav']].join(' ')}>
                <ul className={classes.list}>
                    <li>
                        <Link href="/photos">Photos</Link>
                    </li>
                    <li>
                        <Link href="/videos">Videos</Link>
                    </li>
                    <li>
                        <Link href="/posts">Blog</Link>
                    </li>

                </ul>
            </div>
            <img className={classes['header-pic']} src="/assets/images/header-pic-large.jpg" />
            <div className={classes["shape-divider"]}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"></path>
                </svg>
            </div>
        </header>
    )
}
