import React from "react";
import Link from "./link";
import styled from "styled-components";
import tw from "twin.macro";

export default ({ to, children, ...props }) => (
  <Link to={to}>
    <Button {...props}>{children}</Button>
  </Link>
);

export const Button = styled.button`
  ${tw`rounded-full px-10  min-w-8 md:min-w-12 py-3 text-lg transition duration-200 hover:opacity-75 justify-center`}
`;
