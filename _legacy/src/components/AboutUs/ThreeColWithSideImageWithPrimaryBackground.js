import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../shared/Headings.js";
import { SectionDescription } from "../shared/Typography.js";
import { useTranslation } from "react-i18next";

import { FaStar, FaThumbsUp, FaConciergeBell, FaShapes, FaTable, FaUserTie } from 'react-icons/fa';



const Container = tw.div`relative bg-primary-400 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full font-bold`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }
  .textContainer {
    ${tw`mt-6`}
  }
  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }
  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "Amazing Features",
  subheading = "",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */


  const { t } = useTranslation()
  const defaultCards = [
    {
      imageSrc: <FaStar className="text-primary-400" />,
      title: t("about.offer_points_item1"),
      description:
        t("about.offer_points_item_description1"),
    },
    {
      imageSrc: <FaThumbsUp className="text-primary-400" />,
      title: t("about.offer_points_item2"),
      description:
        t("about.offer_points_item_description2"),
    },
    {
      imageSrc: <FaConciergeBell className="text-primary-400" />,
      title: t("about.offer_points_item3"),
      description:
        t("about.offer_points_item_description3"),
    },
    {
      imageSrc: <FaShapes className="text-primary-400" />,
      title: t("about.offer_points_item4"),
      description:
        t("about.offer_points_item_description4"),
    },
    {
      imageSrc: <FaTable className="text-primary-400" />,
      title: t("about.offer_points_item5"),
      description:
        t("about.offer_points_item_description5"),
    },
    {
      imageSrc: <FaUserTie className="text-primary-400" />,
      title: t("about.offer_points_item6"),
      description:
        t("about.offer_points_item_description6"),
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>{t("about.offer_points_title")}</Heading>
        {description && <Description>{t("about.offer_points_description")}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className='imageContainer'>
                {card.imageSrc}
              </span>
              <span className='textContainer'>
                <span className='title'>{card.title || "Fully Secure"}</span>
                <p className='description'>
                  {card.description ||
                    "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
