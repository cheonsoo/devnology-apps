import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { usePostInfoQuery } from '@/store/queries/useAppData';

import { sayHi } from '@devnology-apps/common-components';
import MarkdownContainer from '@devnology-apps/common-components/src/components/markdownContainer';
// import MarkdownContainer from '@/components/common/markdownContainer';
import NoPost from '@/components/common/markdownContainer/noPost';

const PostOuter = css`
  width: 100%;
  height: 100%;
  /* height: calc(100vh); */
`;

const StyledPostContainer = css`
  height: 100%;
  padding: 40px 20px 20px 20px;
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

const Post = () => {
  const params = useParams();

  const { data: appInfo, isLoading, isError } = usePostInfoQuery(params.id || '');

  if (isLoading) {
    return <div css={StyledLoadingDiv}>Fetching [{params.id}] App Info ...</div>;
  }

  if (isError) {
    return <div css={StyledErrorDiv}>Error ......</div>;
  }

  window.scrollTo(0, 0);

  sayHi();

  return (
    <div className="post-outer" css={PostOuter}>
      <div css={StyledPostContainer}>{appInfo ? <MarkdownContainer content={appInfo} /> : <NoPost />}</div>
    </div>
  );
};

export default Post;
