import { css } from '@emotion/react';

const StyledH1 = css`
  padding-left: 10px;
  font-weight: 600;
  font-size: 20px;
  border-bottom: 5px solid gray;
  text-align: left;
`;

interface IMKH2Props {
  children?: React.ReactNode;
}

export default function MarkdownH1(props: IMKH2Props) {
  return <div css={StyledH1}>{props.children}</div>;
}
