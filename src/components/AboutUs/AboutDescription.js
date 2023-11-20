import React from 'react';
import tw from "twin.macro";
import styled from "styled-components"

import Markdown from 'markdown-to-jsx';

import { useTranslation } from "react-i18next";
const Wrap = tw.div`max-w-7xl px-4 md:px-32 mb-32`;
const Description = styled.div` 
${tw`md:text-center md:text-left text-sm md:text-base lg:text-lg  leading-relaxed  mt-4 max-w-5xl mx-auto`};
ul,
  ol {
    ${tw`pl-6 my-4`};
    li {
      ${tw`relative pb-4 pt-2`};
      :after {
        content: "";
        top: 18px;
        left: -22px;
        ${tw`w-2 h-2 absolute bg-primary-100 rounded-xl`};
      }
    }
  }

`;

const AboutDescription = () => {
  const { t } = useTranslation()
  return (
    <Wrap>
      <Description>
        <Markdown>{t("about.description")}</Markdown>
      </Description>
    </Wrap>
  );
}

export default AboutDescription;
