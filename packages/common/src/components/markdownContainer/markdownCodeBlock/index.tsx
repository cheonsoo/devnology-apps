import { css } from '@emotion/react';

const StyledInlineCodeBlock = css`
  background: #e9e9e9;
  padding: 20px;
  border-radius: 1px;
  overflow: auto;
  max-height: 300px;
  font-weight: 600;
  text-align: left;
`;

export default function StyledInlineCode(props: { children: React.ReactNode }) {
  return <div css={StyledInlineCodeBlock}>{props.children}</div>;
}
