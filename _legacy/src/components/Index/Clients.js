import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Client1 from "../../assets/svg/Client1.svg";
import Client2 from "../../assets/svg/Client2.svg";
// import Client3 from "../../assets/svg/Client3.svg";
import Client4 from "../../assets/svg/client4.svg";
import Client5 from "../../assets/svg/client5.svg";
import Client6 from "../../assets/svg/client6.svg";
const Wrapper = styled.section`
  ${tw`md:max-w-7xl px-1 md:px-24 pt-24`}
`;

const Row = styled.section`
  ${tw`flex flex-row flex-wrap max-w-7xl justify-around `};
  svg {
    ${tw`m-5 min-w-8`};
      max-width:300px;
    }
  @media (max-width: 600px) {
        svg {
      max-width:70vw;
    }
  }
`;

export default function Clients() {
  return (
    <Wrapper>
      <Row>
        <Client1 />
        <Client2 />
        <Client4 />
      </Row>
      <Row>
        <Client5 />
        <Client6 />
      </Row>
    </Wrapper>
  );
}
