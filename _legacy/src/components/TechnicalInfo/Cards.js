import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

function Cards({ className, cards }) {
  return (
    <div className={className}>
      {cards.map(({ header, description, File, Image }) => {
        return (
          <a className='card' >
            <div className='card__image' title={File.absolutePath}><img src={Image.childImageSharp.fluid.src} className="w-full h-full" /></div>
            <a className='card__title' href={File.absolutePath} download title={File.absolutePath}>{header}</a>
            <div className='card__description'>{description}</div>
          </a>
        );
      })}
    </div >
  );
}

export default styled(Cards)`
  ${tw`text-xl text-gray-600 max-w-5xl mx-auto text-2xl  md:mb-12 block flex flex-wrap justify-center hover:text-lightBlue `};

  .card {
    width: 100%;
    max-width: 319px;
    padding: 20px;
    &__image {
      width: 100%;
      height: 200px;
      background: #c4c4c4;
      margin-bottom: 18px;
    }
    &__title {
      ${tw`text-lg lg:text-3xl text-gray-600 max-w-5xl mx-auto mb-0 font-bold cursor-pointer underline`};
    }
    &__description {
      ${tw`text-sm lg:text-lg mt-2 text-gray-600 max-w-5xl mx-auto mb-0`};
    }
  }
`;
