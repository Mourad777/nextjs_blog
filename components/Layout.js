import React from 'react'
import Header from './Header'

const Footer = () => (
    <div style={{ height: 400, background: 300 }}>

    </div>
)

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
