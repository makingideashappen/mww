import React from "react";
import styled from "styled-components"; //eslint-disable-line
import tw from "twin.macro";
import Btn from "../shared/btn";
import { useTranslation } from "react-i18next";
import {
  ContentWithPaddingXl,
  Container,
} from "../shared/Layouts";
import BgImage from "../../../static/img/Background_uk.jpg";


const PrimaryBackgroundContainer = styled.div`
${tw`py-20 lg:py-24 bg-gray-500 rounded-lg relative bg-cover`}
background-image: url(${BgImage});
  position: relative;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    background: linear-gradient(to top,rgba(36,71,104,.1),transparent);
  }
`;
const Row = tw.div`px-8 max-w-screen-lg mx-auto flex items-center relative z-10 flex-col lg:flex-row text-center lg:text-left`;

const ColumnContainer = tw.div`lg:w-1/2 max-w-lg`;
const TextContainer = tw(ColumnContainer)``;
const Text = tw.h5`text-gray-100 md:text-2xl text-xl font-bold`;

const LinksContainer = tw(
  ColumnContainer
)`flex justify-center lg:justify-end mt-6 lg:mt-0 flex-col sm:flex-row`;

export default ({ pushDownFooter = true }) => {
  const { t } = useTranslation();

  return (
    <Container css={pushDownFooter && tw`mb-20 lg:mb-0`}>
      <ContentWithPaddingXl>
        <PrimaryBackgroundContainer
          style={{
            // background: `url(${backgroundImg}) no-repeat`,
            backgroundSize: "cover",
            backgroundPosition: "100% 100%",
          }}
        >
          <Row>
            <TextContainer>
              <Text>{t("home.getStarted_message")}</Text>
            </TextContainer>
            <LinksContainer>
              <Btn to='/news' className='bg-primary-500 text-white mt-6 md:mt-0 '>
                {t("home.getStarted_btn_news_msg")}
              </Btn>
              <Btn
                to='/about-us'
                className='border text-white ml-0 sm:ml-4  mt-6 md:mt-0 '
              >
                {t("home.getStarted_btn_about_msg")}
              </Btn>
            </LinksContainer>
          </Row>
        </PrimaryBackgroundContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
