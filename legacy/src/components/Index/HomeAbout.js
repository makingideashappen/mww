import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const HomeAbout = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Inner>
        <Heading>{parse(t("home.homeAbout_title_html"))}</Heading>
        <Paragraph>{t("home.homeAbout_message")}</Paragraph>
      </Inner>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
      ${tw`bg-orange-900 py-16 px-6 flex items-center justify-center mb-1`};
`;
export const Inner = styled.div`
  ${tw`max-w-5xl text-center`}
`;
export const Heading = styled.h2`
  ${tw`text-white text-2xl lg:text-4xl font-bold`}
  strong {
    ${tw`text-black`}
  }
`;

export const Paragraph = styled.p`
  ${tw`text-gray-200 text-base lg:text-lg mt-10`}
`;

export default HomeAbout;
