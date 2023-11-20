import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import Link from "../shared/link";
import tw from "twin.macro";
import tailwind from "../../../tailwind.config.js";
import { useStickyNav } from "../../hooks/index";
import gsap from "gsap";
import { GrClose } from "react-icons/gr";
import { RiMenu3Line } from "react-icons/ri";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import LogoImage from "../../assets/svg/logo.svg";
import LogoImageInverse from "../../assets/svg/logoInverse.svg";

const Mobile = ({ submenuLinks, navLinks, isStickyNav, isAlt }) => {
  const { t } = useTranslation();

  const openMobile = () => {
    console.log("open menu");
    gsap.to(".mobilemenu", {
      duration: 0.6,
      ease: "back.out(1.7)",
      opacity: 1,
      display: "flex",
      x: 0,
    });
  };

  const closeMobile = () => {
    gsap.to(".mobilemenu", {
      display: "flex",
      duration: 0.4,
      opacity: 0,
      x: -30,
      display: "none",
      ease: "back.in(1.7)",
    });
  };

  const Submenu = () => {
    return (
      <div className='-mb-3'>
        {submenuLinks.map((item) => (
          <div className='p-2 rounded-lg my-2 flex flex-col'>
            <div className=''>
              <div className='text-gray-500 mb-2 text-xs  tracking-wider'>
                {item.heading}
              </div>
              <ul>
                {item.links.map((subitem) => (
                  <Link to={subitem.url}>
                    <li
                      className='text-primary-500 p-2   '
                      onClick={closeMobile}
                    >
                      {subitem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Wrapper
      style={{
        background: isStickyNav
          ? tailwind.theme.colors.black
          : "transparent",
      }}
    >
      <Link to='/'>
        <Logo>
          {isAlt && !isStickyNav ? (
            <LogoImage
              style={{
                transition: ".1s cubic-bezier(0.4, 0, 1, 1)",
              }}
            />
          ) : (
            <LogoImageInverse
              style={{
                transition: ".1s cubic-bezier(0.4, 0, 1, 1)",
              }}
            />
          )}
        </Logo>
      </Link>
      <HamburgerIcon onClick={openMobile}>
        <RiMenu3Line
          style={{
            fontSize: "40px",
            color: !isStickyNav ? tailwind.theme.colors.darkBlue : "white",
            zIndex: "999",
          }}
        />
      </HamburgerIcon>
      <MobileNav className='mobilemenu'>
        <Menu>
          {navLinks.map((item) => {
            return (
              <Link to={item.url}>
                <Item>
                  {item.name}
                  {item.url === "/products" && <Submenu />}
                </Item>
              </Link>
            );
          })}
        </Menu>
        <Socials>
          <FiFacebook className='text-xl ' />
          <FiInstagram className='text-xl ' />
          <FiYoutube className='text-xl ' />
        </Socials>
        <button
          onClick={closeMobile}
          className='absolute top-0 right-0 mt-2 mr-3 bg-primary-200 p-3 z-30 font-bold rounded-full'
        >
          <GrClose style={{ fontSize: "20px" }} />
        </button>
      </MobileNav>
    </Wrapper>
  );
};

export const Wrapper = styled.nav`
  ${tw`w-full flex lg:hidden justify-between items-center fixed left-0 top-0  px-1 py-2 z-50 transition duration-300 `}
`;

export const Logo = tw.div`text-white text-2xl max-w-40 p-2`;
export const HamburgerIcon = tw.div` p-2`;
export const MobileNav = styled.nav`
  z-index: 999;
  ${tw`hidden flex-col bg-gray-200 fixed w-screen h-screen left-0 top-0 py-2 sm:py-4 overflow-scroll  `}
`;

export const Menu = styled.ul`
  ${tw` flex flex-col`}
`;
export const Item = styled.li`
  ${tw` uppercase px-8 py-3 text-primary-400 text-sm font-bold border-b border-gray-400 `}
`;
export const Socials = styled.div`
  ${tw`mt-5  w-full flex justify-around items-center text-primary-400`}
`;
export const LinkItem = styled.a`
  ${tw`flex items-center text-center py-2 px-3 lg:px-2   md:mx-1  cursor-pointer rounded-full text-xs lg:text-xs xl:text-sm font-semibold uppercase transition duration-200 transform hover:scale-105`}
`;

export default Mobile;
