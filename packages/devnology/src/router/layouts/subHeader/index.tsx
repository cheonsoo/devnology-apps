import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import { MENU } from '@/common/constants';

const StyledDiv = css`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  /* position: sticky;
  top: 0;
  left: 0; */
  z-index: 10000;
  backdrop-filter: brightness(0.8);
`;

const StyledUl = css`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;

  li {
    margin-right: 10px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      color: #d9d9d9;
      text-decoration: none;
      font-size: 20px;
      font-weight: 900;
    }

    a:hover {
      color: rgba(57, 150, 250, 0.8);
    }
  }
`;

const SubHeader: React.FC = () => {
  return (
    <div css={StyledDiv}>
      <ul css={StyledUl}>
        {MENU.map((item, idx) => (
          <li key={idx}>
            <Link to={item.path}>
              {item.label.toUpperCase()}
              {idx < MENU.length - 1 ? ' | ' : ''}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubHeader;
