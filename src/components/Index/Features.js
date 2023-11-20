import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import parse from "html-react-parser";

const Container = tw.div`mb-24`;

const Card = styled.div((props) => [
  tw`mt-4 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");
  `,
  props.reversed ? tw`xl:-mr-64` : tw`xl:-ml-64`,
  props.altWidth
    ? tw` md:w-1/2 lg:w-5/12 xl:w-65vw`
    : tw` md:w-1/2 lg:w-5/12 xl:w-75vw`,
  tw`rounded flex-shrink-0 h-80 md:h-128 bg-cover bg-center`,
]);
const Details = styled.div((props) => [
  tw`md:w-1/2 lg:w-5/12 xl:w-50vw mt-4 md:mt-0 md:max-w-3xl mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
  props.altWidth &&
    !props.reversed &&
    tw`md:w-1/2 lg:w-5/12 xl:w-65vw xl:pl-10vw`,
  props.altWidth &&
    props.reversed &&
    tw`md:w-1/2 lg:w-5/12 xl:w-75vw xl:pr-10vw`,
]);
const Title = tw.h4`text-3xl font-bold text-gray-900 mb-8 max-w-lg ml-auto mr-auto`;
const Description = styled.div`
  ${tw`text-base leading-normal max-w-lg ml-auto mr-auto`};
  ul,
  ol {
    ${tw`pl-6`};
    li {
      ${tw`relative leading-none`};
      :after {
        content: "";
        top: calc(50% - 4px);
        left: -22px;
        ${tw`w-2 h-2 absolute bg-primary-100 rounded-xl`};
      }
    }
  }
  a {
    ${tw`text-primary-100 border-b-2 border-primary-100 hover:border-b-0`};
  }
`;

export default function Features({ features }) {
  return (
    <Container>
      {features.map((card, i) => (
        <Card key={i} reversed={i % 2 === 1}>
          <Image
            altWidth={i === 0 || i === features.length - 1}
            reversed={i % 2 === 1}
            imageSrc={card.frontmatter.featuredImage.childImageSharp.fluid.src}
          />
          <Details
            altWidth={i === 0 || i === features.length - 1}
            reversed={i % 2 === 1}
          >
            <Title>{card.frontmatter.title}</Title>
            <Description>{parse(card.frontmatter.description)}</Description>
          </Details>
        </Card>
      ))}
    </Container>
  );
}
