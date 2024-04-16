import { css } from '@emotion/react';

const StyledTitleContainer = css`
  width: 100%;
  display: flex;
  padding: 3px 0 3px 8px;
  border-left: 6px solid orange;
`;

const StyledTitleText = css`
  font-weight: 600;
  font-size: 18px;
  text-align: left;
`;

export default function MarkdownH2(props: any) {
  return (
    <div css={StyledTitleContainer}>
      <div css={StyledTitleText}>{props.children}</div>
    </div>
  );
}
