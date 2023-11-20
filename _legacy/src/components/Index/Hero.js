import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Btn from "../shared/btn";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import { navigate } from "gatsby"

const Hero = ({ sliderItems: slides }) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(1);

  const max = slides.length;

  const intervalBetweenSlides = () =>
    autoplay && setActive(active === max - 1 ? 0 : active + 1);

  useEffect(() => {
    const interval = setInterval(() => intervalBetweenSlides(), 5000);
    return () => clearInterval(interval);
  });


  const isActive = (value) => active === value && "active";

  const sliderStyle = () => {
    const transition = active * -100;
    return {
      width: slides.length * 100 + "vw",
      transform: "translateX(" + transition + "vw)",
    };
  };

  return (
    <Container>
      <Slider className="slider">
        <Slides style={sliderStyle()}>
          {slides.map((item, index) => (
            <Slide
              className="each-slide"
              key={index}
              imageSrc={
                item.frontmatter.featuredImage.childImageSharp.fluid.src
              }
            ></Slide>
          ))}
        </Slides>
        <Sidebar>
          <div>
            <h2>{slides[active].frontmatter.subtitle}</h2>
            <p>{parse(slides[active].frontmatter.description)}</p>
            <HeroBtn className="bg-transparent border mt-5" onClick={() => { navigate("/about-us") }}>
              {t("home.hero_button_message")}
            </HeroBtn>
          </div>
        </Sidebar>
        <Navigation>
          {slides.map((slide, index) => (
            <li className={isActive(index) + " dots"} key={index}>
              <NavItem
                onClick={() => setActive(index)}
                className={
                  index === active
                    ? "text-white border-b-4 border-black transform translate-y-1 hover:text-white-200 hover:text-gray-100"
                    : "text-gray-100 transform translate-y-1 hover:text-gray-100"
                }
              >
                <span>
                  <div>0{index + 1}</div> {slides[index].frontmatter.title}
                </span>
              </NavItem>
            </li>
          ))}
        </Navigation>
        <NavigationLine />
      </Slider>
    </Container>
  );
};

const Container = styled.div``;


const HeroBtn = styled(Btn)`
  ${tw`absolute`}
  bottom:200px;
`;


export const Slider = styled.div`
  ${tw`w-screen h-screen overflow-hidden relative`}
  &:after {
  }
`;
export const Slides = styled.div`
  ${tw` h-screen transition duration-500 `}
`;
export const Slide = styled.div((props) => [
  tw`h-screen w-screen float-left bg-cover bg-center`,
  `background-image: url("${props.imageSrc}")`,
]);

export const Sidebar = styled.div`
  ${tw`absolute left-0 top-0 flex justify-center items-center w-full md:w-3/5 xl:w-2/5 h-full  z-30`}
  background:rgba(0, 0, 0, 0.15);
  div {
    ${tw`w-full text-white ml-10 md:ml-24 pr-5`}
  }
  h2 {
    ${tw`text-xl md:text-4xl lg:text-6xl font-bold tracking-wide`}
  }
  p {
    ${tw`text-xs md:text-lg max-w-xl my-6`}
  }
`;

export const Arrows = styled.div`
  ${tw`hidden md:block text-4xl text-white opacity-75`}
`;
export const PrevButton = styled.button`
  ${tw` absolute left-0 top-1/2 ml-5 bg-none`}
`;
export const NextButton = styled.button`
  ${tw` absolute top-1/2 right-0 mr-5 bg-none`}
`;

export const NavigationLine = styled.hr`
  ${tw`border-b border-transparentDarkBlue w-full ml-20`};
  transform: translateY(-37px);
`;

export const Navigation = styled.ul`
  ${tw`absolute flex flex-col md:flex-row w-full left-0 bottom-0 mb-0 md:mb-6 lg:mb-10 pl-3 md:pl-8 lg:pl-16 z-40 `};
  span {
    ${tw`flex font-bold text-base items-end max-w-48 h-20`}
    line-height:20px;
    div {
      ${tw`font-normal text-xs mr-2`}
      line-height:20px;
    }
  }
`;
export const NavItem = styled.div`
  ${tw` py-3 mx-3 md:py-4 md:mx-4 cursor-pointer text-sm min-w-8`}
`;
export default Hero;
