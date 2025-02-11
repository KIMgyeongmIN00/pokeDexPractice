import React from "react";
import { TopButton } from "../styled/StyledComponents";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // 스크롤을 (0, 0)으로 설정
  };

  return <TopButton onClick={scrollToTop}>↑</TopButton>;
};

export default ScrollToTopButton;
