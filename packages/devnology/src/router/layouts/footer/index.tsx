import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const StyledDiv = css`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dedede;
  font-weight: 500;
  margin-top: 0;
  border-top: 10px solid #e9e9e9;
  border-bottom: 0px solid #e9e9e9;
  position: fixed;
  bottom: 0px;
  background-color: rgba(51, 51, 51, 1);
  /* background-color: rgba(0, 0, 0, 0.8); */

  &.show {
    animation: fade-in 0.4s;
    animation-fill-mode: forwards;
  }

  &.hide {
    animation: fade-out 0.4s;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      bottom: -66px;
    }
    to {
      bottom: 0;
    }
  }

  @keyframes fade-out {
    from {
      bottom: 0;
    }
    to {
      bottom: -66px;
    }
  }

  div > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = () => {
  const [hideFooter, setHideFooter] = useState<boolean>(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setHideFooter(false);
        } else {
          setHideFooter(true);
        }
      });
    }, options);

    const target = document.querySelector('#header')!;
    observer.observe(target);
  }, []);

  return (
    <div className={hideFooter ? 'hide' : 'show'} id="footer" css={StyledDiv}>
      <div>
        <div>Copyright @2020 Devnology (v.1.0.0)</div>
        <div>mansoo.app@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
