import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Cards from "./Cards";
import { useTranslation } from "react-i18next"

const Wrap = styled.div`
  ${tw`flex flex-col p-2 pt-24 `};
  h1 {
    ${tw`text-center font-bold text-4xl md:text-5xl text-primary-500 w-full  pb-4 px-4  border-b-2  mb-16 mx-auto`}
  }
  h2 {
    ${tw`text-2xl md:text-3xl text-gray-600 max-w-5xl mx-auto mb-16`};
  }
  p {
    ${tw`text-sm lg:text-base text-gray-600 max-w-5xl mx-auto mb-12`};
  }
  a {
    ${tw`text-xl text-gray-600 max-w-5xl mx-auto text-2xl font-bold mb-12 block cursor-pointer hover:text-lightBlue underline`};
  }
`;


const TechnicalInfo = ({ infoRows }) => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <h1>{t("technicalInfo.heading")}</h1>
      <h2>{t("technicalInfo.subHeading")}</h2>
      <p>{t("technicalInfo.message")}</p>
      {infoRows.map(({ node }) => {
        const { heading, subheading, cards } = node.frontmatter
        return (
          <div >
            <h2 className="font-bold w-full flex justify-center">{heading}</h2>
            <p>{subheading}</p>
            <Cards cards={cards} />
          </div>
        )
      })}
    </Wrap>)
}

export default TechnicalInfo