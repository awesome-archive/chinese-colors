import React from 'react';
import styled from 'styled-components';
import { useMobile } from '../../hooks';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 0.6rem;
  line-height: 1.2;
  padding: 0.6rem 0.4rem;
  margin: 1rem 0;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.4);
  &.mobile {
    font-size: 0.8rem;
  }
  > h2 {
    color: inherit;
    font-size: 0.4rem;
    width: 0.5rem;
    align-self: flex-end;
    margin-right: 0.3rem;
  }
  .line {
    color: inherit;
    text-align: right;
    width: 1rem;
    letter-spacing: 0.14rem;
    font-weight: bold;
  }
`;
const Poetry = ({ bgColor, fontColor = '#fff', content = '', author = '', title = '' }) => {
  const { isMobile } = useMobile();
  return (
    <Wrapper style={{ background: bgColor, color: fontColor }} className={isMobile ? 'mobile' : ''}>
      <h2>
        {author} · {title}
      </h2>
      {content.reverse().map(line => {
        return (
          <p key={line} className="line">
            {line}
          </p>
        );
      })}
    </Wrapper>
  );
};

export default Poetry;
