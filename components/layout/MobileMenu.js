'use client'
import Link from 'next/link'
import { useState } from "react"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [isActive, setIsActive] = useState("")

    const handleToggle = (key) => {
        setIsActive(isActive === key ? "" : key)
    }

    return (
        <div className={`mobile-menu-wrapper ${isMobileMenu ? "sidebar-visible" : ""}`}>
            <div className="mobile-header">
                <div className="burger-icon" onClick={handleMobileMenu}>
                    <span className="burger-icon-top" />
                    <span className="burger-icon-mid" />
                    <span className="burger-icon-bottom" />
                </div>
                <div className="menu-content">
                    <nav>
                        <ul className="mobile-menu">
                            <li className={isActive === "home" ? "active" : ""}>
                                <span onClick={() => handleToggle("home")}>Home Pages</span>
                                <ul className={isActive === "home" ? "sub-menu open" : "sub-menu"}>
                                    <li><Link href="/">Business Solutions</Link></li>
                                    <li><Link href="/index-2">Marketing App</Link></li>
                                    <li><Link href="/index-3">Web Agency</Link></li>
                                    {/* Add other links here */}
                                </ul>
                            </li>
                            <li className={isActive === "inner" ? "active" : ""}>
                                <span onClick={() => handleToggle("inner")}>Inner Pages</span>
                                <ul className={isActive === "inner" ? "sub-menu open" : "sub-menu"}>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/service">Our Services</Link></li>
                                    {/* Add other links here */}
                                </ul>
                            </li>
                            <li className={isActive === "blog" ? "active" : ""}>
                                <span onClick={() => handleToggle("blog")}>Blog</span>
                                <ul className={isActive === "blog" ? "sub-menu open" : "sub-menu"}>
                                    <li><Link href="/blog">Blog V1</Link></li>
                                    <li><Link href="/blog-2">Blog V2</Link></li>
                                    {/* Add other links here */}
                                </ul>
                            </li>
                            <li className={isActive === "utility" ? "active" : ""}>
                                <span onClick={() => handleToggle("utility")}>Utility Pages</span>
                                <ul className={isActive === "utility" ? "sub-menu open" : "sub-menu"}>
                                    <li><Link href="/register">Register</Link></li>
                                    <li><Link href="/login">Sign In</Link></li>
                                    {/* Add other links here */}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <footer className="mobile-footer">
                <div className="logo-center">
                    <img src="/assets/imgs/logo.png" alt="Logo" />
                </div>
                <div className="footer-content">
                    <p>Copyright 2024 © DH Solutions LLC</p>
                    <p>Developed by Team @ DH Solutions.</p>
                </div>
            </footer>
        </div>
    )
}
