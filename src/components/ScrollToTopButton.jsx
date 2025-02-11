import React from "react";
import { TopButton } from "../styled/StyledComponents";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // 최상단으로 스크롤 설정
  };

  return <TopButton onClick={scrollToTop}>↑</TopButton>;
};

export default ScrollToTopButton;
