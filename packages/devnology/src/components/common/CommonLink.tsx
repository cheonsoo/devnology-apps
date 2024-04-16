import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

const StyledDiv = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10000;

  & a {
    text-decoration: none;
    color: white;
  }
`;

interface ICommonLinkProps {
  to: string;
  children: any;
}

const CommonLink: React.FC<ICommonLinkProps> = ({ to = '/', ...props }) => {
  return (
    <div css={StyledDiv}>
      <Link to={to}>{props.children}</Link>
    </div>
  );
};

export default CommonLink;
