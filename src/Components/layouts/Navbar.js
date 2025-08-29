"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Link from "next/link";

import {
  IoNotifications,
  IoSettingsSharp,
  IoWalletSharp,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

import styles from "./navbar.module.css";

const links = [
  { label: "Custom Feed", link: "/custom-feed" },
  { label: "Live Feeds", link: "/live-feeds" },
  { label: "Alert Feed", link: "/alert-feed" },
  { label: "Watchlist", link: "/watchlist" },
  { label: "Trending", link: "/trending" },
  { label: "Positions", link: "/positions" },
  { label: "Wallets", link: "/wallets" },
  { label: "Claim", link: "/claim" },
  { label: "Bridge", link: "/bridge" },
];

const Navbar = () => {
    const [offCanvasOpen, setOffCanvasOpen] = useState(false);
    const pathname = usePathname();
  const toggleOffCanvas = () => {
    setOffCanvasOpen(!offCanvasOpen);
  };

  const closeOffCanvas = () => {
    setOffCanvasOpen(false);
  };
  const isActive = (path) => path === pathname;

  const MobileMenu = (
    <div className="d-block d-lg-none">
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
          <ul className="navbar-nav">
            {links.map((item) => (
              <li className="nav-item" key={item.link}>
                {console.log("isActive(item.link)", isActive(item.link))}
                <Link
                  className={
                    isActive(item.link) ? "nav-link active" : "nav-link"
                  }
                  href={item.link}
                  onClick={closeOffCanvas}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {offCanvasOpen && (
        <div className={styles.backdrop} onClick={closeOffCanvas}></div>
      )}
    </div>
  );
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {MobileMenu}

        {/* Logo in the center */}
        <a className="navbar-brand mx-auto mx-lg-0" href="#">
          <Image src="/logo.svg" alt="Logo" width={100} height={25} priority />
        </a>
        <ul className="navbar-nav d-none d-lg-flex">
          {links.map((item) => (
            <li className="nav-item" key={item.link}>
              <Link
                className={isActive(item.link) ? "nav-link active" : "nav-link"}
                href={item.link}
                onClick={closeOffCanvas}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Icons on the right */}
        <div className={`d-flex align-items-center ${styles.icons}`}>
          <IoNotifications className={`${styles.icon} `} />
          <IoSettingsSharp className={`${styles.icon} `} />
          <FaUserCircle className={`${styles.icon}`} />
          <IoWalletSharp className={styles.icon} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
