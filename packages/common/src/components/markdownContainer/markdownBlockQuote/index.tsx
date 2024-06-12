import { css } from '@emotion/react';

const StyledBlockQuoteContainer = css`
  margin: 0;
  padding: 0;
`;

const StyledBlockQuote = css`
  border-left: 5px solid green;
  padding: 0 0 0 8px;
  font-weight: 600;
  font-size: 15px;
  background-color: #eeeeee;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  border-radius: 0 8px 8px 0;

  & p {
    margin: 0;
  }

  & span {
    text-align: left;
  }
`;

export default function MarkdownBlockQuote({ ...props }) {
  return (
    <div css={StyledBlockQuoteContainer}>
      <div css={StyledBlockQuote}>{props.children}</div>
    </div>
  );
}
