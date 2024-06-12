import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { useAppInfoQuery } from '@/store/queries/useAppData';

const SDiv = css`
  width: 100%;
  height: 100%;
`;

export const SIFrame = css`
  /* width: 100%;
  height: 100%; */
  width: 100vw;
  height: 100vh;
  display: block;
  border: 0;
  background: #fff;
`;

const StyledLoadingDiv = css`
  width: 100%;
  height: 500px;
  font-size: 20px;
  font-weight: bolder;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledErrorDiv = css`
  width: 100%;
  height: 500px;
  font-size: 20px;
  font-weight: bolder;
  background-color: #eeeeee;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  const params = useParams();

  const { data: appInfo, isLoading, isError } = useAppInfoQuery(params.id || '');

  if (isLoading) {
    return <div css={StyledLoadingDiv}>Fetching [{params.id}] App Info ...</div>;
  }

  if (isError) {
    return <div css={StyledErrorDiv}>Error ......</div>;
  }

  window.scrollTo(0, 0);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div css={SDiv}>{appInfo && <iframe css={SIFrame} src={appInfo.path}></iframe>}</div>
    </div>
  );
};

export default App;
