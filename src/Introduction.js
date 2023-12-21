import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "./AuthContext";

const Introduction = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { authInfo } = useAuth();

  const handleButtonClick = () => {
    setShowInfo(true);
  };

  return (
    <Container>
      <LeftSection>25</LeftSection>
      <RightSection>75</RightSection>
    </Container>
  );
};

export default Introduction;

const Container = styled.div`
  display: flex;
  max-width: 300px;
  margin: auto;
`;

const LeftSection = styled.div`
  width: 25%;
  border-right: 1px solid #ddd; // 오른쪽에 선을 추가
`;

const RightSection = styled.div`
  width: 75%;
  overflow-y: auto;
  background-color: gray; // 오른쪽 섹션의 배경색을 Gray로 설정
`;
