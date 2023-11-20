import React, { useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import Link from "../shared/link";
import tw from "twin.macro";
import tailwind from "../../../tailwind.config.js";
import { useStickyNav } from "../../hooks/index";
import MobileMenu from "./MobileMenu";
import LogoImage from "../../assets/svg/logo.svg";
import LogoImageInverse from "../../assets/svg/logoInverse.svg";
import Envelope from "../../assets/svg/envelope.svg"

const StyledLink = styled(Link)`
  box-sizing: border-box;
  &.triangle {
    ${tw`relative`}
    padding-right:.6em;
    &::after {
      display: inline-block;
      content: "";
      font-size: 0.6em;
      position: relative;
      left: 1em;
      top: 0rem;
      transition: cubic-bezier(0.17, 0.67, 0.83, 0.67);
      transition-duration: 0.1s;
      transition-property: transform;
      width: 2.5px;
      height: 5px;
      border-left: ${(props) =>
    props.isStickyNav
      ? "white solid 5px"
      : `5px solid ${tailwind.theme.colors.darkBlue}`};
      border-bottom: solid 5px transparent;
      border-top: solid 5px transparent;
    }
    &:hover {
      &::after {
        top: 0rem;
        transform: rotate(90deg);
      }
    }
    &--active {
      &::after {
        top: 0rem;
        transform: rotate(90deg);
      }
    }
  }
  :hover {
    .nav__submenu {
      display: flex;
    }
  }
  ${(props) =>
    props.isActive
      ? css`
          border-bottom: ${(props) =>
          props.isStickyNav
            ? "1px solid white"
            : `1px solid ${tailwind.theme.colors.darkBlue}`};
        `
      : css`
          position: relative;
          &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 1px;
          }
          transition: color 0.1s;
          &::before {
            // Set border to invisible, so we don't see a 4px border on a 0x0 element before the transition starts
            border-bottom: 1px solid transparent;
            width: 0;
            height: 0;
          }

          // And this the bottom & left borders (expands left, then up)
          &::before {
            bottom: 0;
          }

          &:hover {
            color: ${(props) =>
          props.isStickyNav ? "white " : tailwind.theme.colors.darkBlue};
          }

          // Hover styles
          &:hover::before {
            width: 100%;
            height: 100%;
          }

          &:hover::before {
            border-bottom-color: ${(props) =>
          props.isStickyNav
            ? "white"
            : tailwind.theme.colors.darkBlue}; // Make borders visible
            transition: border-color 0s cubic-bezier(0.4, 0, 1, 1) 0.2s,
              // Wait for ::before to finish before showing border
                width 0.1s cubic-bezier(0.4, 0, 1, 1) 0.2s;
            // And then exanding width
          }
        `}
`;

const Header = (props) => {
  const location = useLocation();
  const [isAlt, setAlt] = useState(true);
  const isStickyNav = useStickyNav();
  const [isSubmenuHover, setSubmenuHover] = useState(false);
  const { t } = useTranslation();

  const navLinks = [
    {
      name: t("shared.nav_link0"),
      url: "/",
    },
    {
      name: t("shared.nav_link1"),
      url: "/products",
    },
    {
      name: t("shared.nav_link2"),
      url: "/technical-info",
    },
    {
      name: t("shared.nav_link3"),
      url: "/news",
    },
    {
      name: t("shared.nav_link4"),
      url: "/about-us",
    },
    {
      name: t("shared.nav_link5"),
      url: "/contact",
    },
  ];

  const submenuLinks = [
    {
      heading: t("shared.nav_link1_submenu_title1"),
      links: [
        {
          name: t("shared.nav_link1_submenu_title1_item1"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title1") +
            t("shared.nav_link1_submenu_title1_item1"),
        },
        {
          name: t("shared.nav_link1_submenu_title1_item2"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title1") +
            t("shared.nav_link1_submenu_title1_item2"),
        },
      ],
    },
    {
      heading: t("shared.nav_link1_submenu_title2"),
      links: [
        {
          name: t("shared.nav_link1_submenu_title2_item1"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2") +
            t("shared.nav_link1_submenu_title2_item1"),
        },
        {
          name: t("shared.nav_link1_submenu_title2_item2"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2") +
            t("shared.nav_link1_submenu_title2_item2"),
        },
        {
          name: t("shared.nav_link1_submenu_title2_item3"),
          url:
            "/products/#" +
            t("shared.nav_link1_submenu_title2_item3")
              .split(" ")
              .join(""),
        },
      ],
    },
  ];

  useEffect(() => {
    if (location.pathname === "/") {
      setAlt(false);
    } else if (isAlt) {
      setAlt(true);
    }
  }, [location, isAlt]);

  const handleMouseEnter = (val) => {
    setSubmenuHover(val);
  };

  return (
    <>
      <Wrapper isStickyNav={isStickyNav} isAlt={isAlt}>
        <Link to='/' style={{ margin: "1px 0" }}>
          <Logo>
            {isAlt && !isStickyNav ? (
              <LogoImage
                style={{
                  transition: ".1s cubic-bezier(0.4, 0, 1, 1)",
                  maxWidth: isStickyNav ? 150 : 150,
                  marginTop: isStickyNav ? "2px 0" : "2px 0",
                  marginLeft: "4.5rem",
                }}
              />
            ) : (
              <LogoImageInverse
                style={{
                  transition: ".1s cubic-bezier(0.4, 0, 1, 1)",
                  maxWidth: isStickyNav ? 150 : 150,
                  marginTop: isStickyNav ? "2px 0" : "2px 0",
                  marginLeft: "4.5rem",
                }}
              />
            )}
          </Logo>
        </Link>
        <Menu>
          {navLinks.map((item) => (
            <Item
              key={item.url}
              isStickyNav={isStickyNav}
              className='nav__menu-item'
            >
              <StyledLink
                isActive={
                  (location.pathname === "/" && item.url === "/") ||
                  (location.pathname.includes(item.url) && item.url !== "/")
                }
                isStickyNav={isStickyNav}
                key={item.url}
                to={item.url}
                className={
                  item.url === "/products"
                    ? !isSubmenuHover
                      ? "triangle triangle--active"
                      : "triangle"
                    : ""
                }
              >
                {item.name}
              </StyledLink>
              <div
                onMouseEnter={() => handleMouseEnter(false)}
                onMouseLeave={() => handleMouseEnter(true)}
              >
                {item.url === "/products" && (
                  <ProductsSubmenu submenuLinks={submenuLinks} />
                )}
              </div>
            </Item>
          ))}
          <Item>

          </Item>
        </Menu>
      </Wrapper>
      <MobileMenu
        navLinks={navLinks}
        submenuLinks={submenuLinks}
        isStickyNav={isStickyNav}
        isAlt={isAlt}
      />
    </>
  );
};

const ProductsSubmenu = ({ submenuLinks }) => {
  const { t } = useTranslation();

  return (
    <Submenu className={"nav__submenu"}>
      {submenuLinks.map((item) => {
        return (
          <SubmenuBox>
            <SubmenuHeading>{item.heading}</SubmenuHeading>
            {item.links.map((item) => (
              <SubmenuLink to={item.url}>{item.name}</SubmenuLink>
            ))}
          </SubmenuBox>
        );
      })}
    </Submenu>
  );
};

export const Wrapper = styled.nav`
  ${tw`hidden lg:flex w-full justify-between fixed left-0 top-0 bg-transparent  px-6 z-50 transition duration-300`};
  ${(props) =>
    props.isStickyNav ? "background: black" : "background: transparent"};
   
 `;

export const Logo = tw.div`text-white text-2xl`;

export const Menu = styled.ul`
  ${tw`flex justify-center`}
  min-width:calc(60vw - 24px);
`;

export const Item = styled.li`
  ${tw`text-xl tracking-wider ml-5 py-4`}
  ${tw` text-lg mx-4 py-4`}
  color: ${(props) =>
    props.isStickyNav ? "white" : tailwind.theme.colors.darkBlue};

`;

export const Submenu = styled.ul`
  ${tw`flex-col bg-black mr-0 mt-3 text-white`}
`;
export const SubmenuBox = styled.div`
  ${tw`flex flex-col mb-6 last:mb-2`}
`;
export const SubmenuHeading = styled.span`
  ${tw`font-semibold border-b border-orange-100 py-2 px-4 pb-1 text-sm mb-2 `}
  letter-spacing:2px;
`;
export const SubmenuLink = styled(Link)`
  ${tw` px-4 py-1 hover:bg-primary-300 cursor-pointer text-sm  flex items-center`}
  width:142px;
`;

export default Header;
