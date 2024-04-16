import { MouseEvent } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from '../../common/Image';

interface IImageProps {
  alt?: string;
  src?: string;
}

interface IStyledImage {
  width?: string;
  height?: string;
}

const StyledImageContainer = css`
  display: grid;
  place-items: center;
`;

const StyledImage = styled.img<IStyledImage>`
  width: 100%;
  max-width: 100%;
  /* max-width: 100vw; */

  ${(props) =>
    props.width &&
    `
    width: ${props.width};
  `}
  ${(props) =>
    props.height &&
    `
    height: ${props.height};
  `}
`;

export default function MarkdownImage(props: IImageProps) {
  const altProps = props.alt || '';
  const alts = altProps.split(';');

  let alt = alts.find((a: string) => a.toLowerCase().startsWith('alt'));
  let width = alts.find((a: string) => a.toLowerCase().startsWith('width'));
  let height = alts.find((a: string) => a.toLowerCase().startsWith('height'));

  alt = alt ? alt.toLowerCase().replace('alt=', '') : '';
  width = width ? width.toLowerCase().replace('width=', '') : '';
  height = height ? height.toLowerCase().replace('height=', '') : '';

  // const handleImageClick = (evt: MouseEvent<HTMLImageElement>) => {
  //   console.log(evt);
  // };

  return (
    <div css={StyledImageContainer}>
      {/* <StyledImage width={width} height={height} alt={alt} loading="lazy" src={props.src} onClick={handleImageClick} /> */}
      <Image src={props.src}></Image>
    </div>
  );
}
