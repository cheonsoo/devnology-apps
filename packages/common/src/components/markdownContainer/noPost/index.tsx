import { css } from '@emotion/react';

const NoMarkdownContentDiv = css`
  width: 900px;
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-weight: 900;
  font-size: 30px;
`;

function NoPost(props: any) {
  return <div css={NoMarkdownContentDiv}>{props.content || 'No Post Yet'}</div>;
}

export default NoPost;
