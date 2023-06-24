import styled from "styled-components";

export const StatusContainer = styled.div`
  max-width: 60rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  width: 36.6rem;
  height: 2rem;
  border-radius: 10rem;

  @keyframes marquee-animation {
    0% {
      transform: translate(0);
    }

    100% {
      transform: translate(-100%);
    }
  }
`;

export const StatusMessage = styled.div`
  white-space: nowrap;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  animation: marquee-animation 5s linear infinite;
  
  > span {
    margin-right: 16rem;
  }
`;

export const StatusIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #4ade80;
  margin-right: 0.5rem;
`;

export const StatusTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
`;
