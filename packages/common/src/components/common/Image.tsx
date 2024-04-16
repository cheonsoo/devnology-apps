import { useState } from 'react';
import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

interface IImageProps {
  src?: string;
  onClick?: () => void;
}

const imgCss = css`
  width: 100%;
`;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  boxShadow: 24
  // border: '2px solid #000',
  // p: 4
};

const Image = (props: IImageProps) => {
  const [toggle, setToggle] = useState(false);

  const handleClickToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <img css={imgCss} loading="lazy" src={props.src} onClick={handleClickToggle} />

      {toggle && (
        <Modal
          keepMounted
          open={toggle}
          onClose={handleClickToggle}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <img css={imgCss} loading="lazy" src={props.src} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Image;
