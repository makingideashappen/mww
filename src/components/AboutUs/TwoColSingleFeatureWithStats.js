import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "../shared/Headings.js";
import { useTranslation } from "react-i18next";

const Container = tw.div`relative lg:py-0 pt-5 max-w-5xl  mx-auto`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto pt-10  pb-10`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(
  Column
)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto `;
const TextColumn = styled(Column)((props) => [
  tw`md:w-6/12 mt-8 md:mt-0 p-10`,
  props.textOnLeft
    ? tw`md:mr-8 lg:mr-16 md:order-first`
    : tw`md:ml-8 lg:ml-16 md:order-last`,
]);

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");
  max-height:340px;`,
  tw`rounded-sm bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(
  SectionHeading
)`text-3xl text-primary-500 sm:text-4xl lg:text-5xl text-center font-bold md:text-left leading-tight`;

export default ({ textOnLeft = false }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={require("../../../static/img/london.jpeg")} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{t("about.image_heading")}</Heading>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
