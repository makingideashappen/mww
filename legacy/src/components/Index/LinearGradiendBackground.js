import React from "react";
import styled from "styled-components";

const LinearGradiendBackground = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(LinearGradiendBackground)`
  background: linear-gradient(to top, #f7fafc 25%, white 50%);
`;
