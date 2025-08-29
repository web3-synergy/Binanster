'use client';
import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";


import { AkarIconsXFill } from "../icons/AkarIconsXFill";
import  Dexscreener from "../icons/dexscreener.svg";
import { BxBxlTelegram } from "../icons/BxBxlTelegram";
import { DocumentOnePageMultiple24Filled } from "../icons/DocumentOnePageMultiple24Filled";
import DextoolsSeeklogo from "../icons/DextoolsSeeklogo";
import styles from "./navbar.module.css";

const Navbar = () => {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  
    const toggleOffCanvas = () => {
        setOffCanvasOpen(!offCanvasOpen);
    };

    const closeOffCanvas = () => {
        setOffCanvasOpen(false);
    };
    
    const mainMenu = (
        <div className={`d-flex flex-column flex-md-row  ${styles.icons}`}>
           <a href="https://dexscreener.com/solana/guxautvxh2cvv2avgkby8cfcsn9v2uiwr8vccqpn9hiu" target="_blank" rel="noopener noreferrer">
  <Image src={Dexscreener} alt="Dexscreener" width={24} height={24} className={styles.icon} />
</a>
            <Link href='https://www.dextools.io/app/en/solana/pair-explorer/GUXAutvXh2Cvv2avGkbY8CfcsN9v2Uiwr8VCCqpn9HiU?t=1756380852203' target="_blank"><DextoolsSeeklogo className={`${styles.icon} `} /></Link>
            <Link href='https://t.me/+bvDiSc1DWPo5MjFh' target="_blank"><BxBxlTelegram className={`${styles.icon}`} /></Link>
            <Link href='https://x.com/nothingofsolana?s=21' target="_blank"><AkarIconsXFill className={styles.icon} /></Link>
        </div>
    )
    const MobileMenu = (
        <div className="d-block d-md-none">
            <button
                className={` ${styles.navbarToggler}`}
                type="button"
                onClick={toggleOffCanvas}
            >
                {offCanvasOpen ? (
                    <IoMdClose className={styles.icon} />
                ) : (
                    <RiMenu2Line className={styles.icon} />
                )}
            </button>

            <div
                className={`${styles.offcanvas} ${offCanvasOpen ? styles.show : ""}`}
            >
                <div className={styles.offcanvasBody}>
                    {mainMenu}
                </div>
            </div>

            {offCanvasOpen && (
                <div className={styles.backdrop} onClick={closeOffCanvas}></div>
            )}
        </div>
    );
    return (
        <nav className={`py-md-2 px-md-3  navbar navbar-expand-md navbar-dark fixed-top ${styles.navbar}`} style={{zIndex:'2'}}>
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {MobileMenu}

                {/* Logo in the center */}
                <a className="navbar-brand mx-auto mx-md-0" href="#">
                    <Image src="/logo.svg" alt="Logo" width={180} height={40} priority />
                </a>
                <div className="d-none d-md-flex">
                    {mainMenu}
                </div>
                {/* Icons on the right 
                <div className={`d-flex align-items-center ${styles.icons}`}>
                    <button className={styles.btn}><span>Launch dApp</span></button>
                </div>*/}
            </div>
        </nav>
    );
};

export default Navbar;
