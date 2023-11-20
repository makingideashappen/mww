import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FiFacebook, FiYoutube, FiInstagram, FiTwitter, FaSun, FaMoon } from "react-icons/fi";

const StickySocials = () => {
  return (
    <Wrapper>
      <a href='#'>
        <FiFacebook />
      </a>
      <a href='#'>
        <FiInstagram />
      </a>
      <a href='#'>
        <FiYoutube />
      </a>

      <a href='#'>
        <FiTwitter />
      </a>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  z-index: 9999;
  ${tw`fixed bottom-0 right-0 px-3 pt-4 bg-black rounded-tl-3xl  flex flex-col`}
  svg {
    ${tw`text-white mb-6 text-2xl hover:opacity-50`}
  }
`;

export default StickySocials;
