import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import tailwind from "../../../tailwind.config";
import Btn from "../shared/btn";
import ImageSrc from "../../../static/img/dreamy-pretty-woman-with-tea-and-tablet-on-loggia.jpg";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

const HomeAbout2 = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Left>
        <Image src={ImageSrc} />
      </Left>
      <Right>
        <Subtitle>{t("home.homeAbout2_title")}</Subtitle>
        <Heading>{parse(t("home.homeAbout2_subtitle_html"))}</Heading>
        <Description>
          {parse(t("home.homeAbout2_description_html"))}
        </Description>
        <ButtonsWrapper>
          <Btn to='/' className='bg-primary-500 text-white mr-4'>
            {t("home.homeAbout2_button_products_message")}
          </Btn>
          <Btn
            to='/'
            className='text-primary-500 border border-primary-500 mt-5 md:mt-0'
          >
            {t("home.homeAbout2_button_tech_info_message")}
          </Btn>
        </ButtonsWrapper>
      </Right>
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  ${tw`py-0 lg:mb-16 flex flex-col lg:flex-row flex-wrap  md:max-w-7xl px-1 md:px-20`}
`;
export const Left = styled.div`
  ${tw`w-full lg:w-2/5 p-0 md:p-4 lg:p-6 xl:p-10 xl:pr-0 flex items-center justify-center`}
`;
export const Right = styled.div`
  ${tw`w-full lg:w-3/5 pl-0 lg:pl-10 px-4 py-8 flex flex-col justify-center`}
`;
export const Image = styled.img`
  box-shadow: -20px -20px 0px ${tailwind.theme.colors.lightBlue};
  ${tw``};
`;

export const Subtitle = styled.span`
  ${tw`text-secondary-500 text-base lg:text-2xl font-black `}
`;

export const Heading = styled.h2`
  ${tw`text-primary-500 text-3xl lg:text-5xl font-black mt-4`}
  br {
    ${tw`text-secondary-500 `}
  }
`;

export const ButtonsWrapper = styled.div`
  ${tw`flex flex-col md:flex-row mt-4`}
`;
export const Description = styled.div``;

export default HomeAbout2;
