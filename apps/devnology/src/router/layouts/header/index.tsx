import React from 'react';
import { css } from '@emotion/react';
import CommonLink from '@/components/common/CommonLink';
import { TITLE } from '@/common/constants';

const StyledDiv = css`
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  z-index: 10000;
`;

const StyledHeader = css`
  color: #d9d9d9;
  font-weight: 900;
  font-size: 25px;
  padding-left: 20px;
  background-color: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 900;
  }
`;

const Header: React.FC = () => {
  return (
    <div id="header" css={StyledDiv}>
      <div css={StyledHeader}>
        <CommonLink to="/">{TITLE}</CommonLink>
      </div>
    </div>
  );
};

export default Header;
