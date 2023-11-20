import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import ShapeDivider from "../../assets/svg/shapedivider.svg";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination]);

const Testimonials = () => {
  const { t } = useTranslation();

  const isMobile = useMediaQuery({ query: "(max-width: 840px)" });

  return (
    <Wrapper>
      <Inner>
        <Heading>{t("home.testimonials_title")}</Heading>
        <Slider>
          <Swiper
            spaceBetween={10}
            slidesPerView={isMobile ? 1 : 2}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Slide>
                <p>
                  {t("home.testimonials_message1")}
                </p>
                <h3>{t("home.testimonials_subtitle1")}</h3>
                <QuotationMark>"</QuotationMark>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <p>
                  {t("home.testimonials_message2")}
                </p>
                <h3>{t("home.testimonials_subtitle2")}</h3>
                <QuotationMark>"</QuotationMark>
              </Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide>
                <p>
                  {t("home.testimonials_message3")}
                </p>
                <h3>{t("home.testimonials_subtitle3")}</h3>
                <QuotationMark>"</QuotationMark>
              </Slide>
            </SwiperSlide>
          </Swiper>
        </Slider>
      </Inner>
      <ShapeDivider className='absolute top-0 left-0 w-full h-auto' />
    </Wrapper>
  );
};

export const Wrapper = styled.section`
  ${tw`relative bg-gray-200 py-10 pt-20 md:pt-0 px-2 md:px-2 xl:px-32 xxl:px-56`}
`;
export const Inner = styled.div`
  ${tw`flex flex-col lg:flex-row p-2 z-30 `}
`;
export const Heading = styled.div`
  ${tw`flex items-end justify-center w-full lg:w-1/5 font-bold text-2xl text-primary-500  mb-4 lg:mb-24 z-20`}
`;
export const Slider = styled.div`
  ${tw`w-full  lg:w-4/5 p-3 md:p-6 `}
`;
export const Slide = styled.div`
  ${tw`relative bg-white rounded-2xl shadow-lg p-4 lg:p-8 m-3 mb-16`}
  p {
    ${tw`text-sm lg:text-base`}
  }
  h3 {
    ${tw`font-bold text-primary-500 text-xl mt-6`}
  }
`;
export const QuotationMark = styled.div`
  ${tw`absolute right-0 bottom-0 text-5xl font-black mr-6 -mb-3`}
`;

export default Testimonials;
