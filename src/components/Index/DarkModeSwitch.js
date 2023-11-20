import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaSun, FaMoon } from "react-icons/fa"

const DarkModeSwitch = () => {
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.theme = 'light'
        } else {
            localStorage.theme = 'dark'
        }
        setDarkMode(!darkMode)
    }

    return (
        <Wrapper>
            <div onClick={() => handleClick()}>
                {darkMode ? <FaSun /> : <FaMoon />}
            </div>
        </Wrapper>
    );
};

export const Wrapper = styled.section`

  svg {
    ${tw`text-primary-500 mb-6 text-2xl hover:opacity-50 hover:cursor-pointer`}
  }
`;

export default DarkModeSwitch;
