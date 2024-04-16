// import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import MarkDownImage from './markdownImage';
import MarkDownCodeBlock from './markdownCodeBlock';
import MarkDownH1 from './markdownH1';
import MarkDownH2 from './markdownH2';
import MarkDownBlockQuote from './markdownBlockQuote';
// import MarkDownIframe from './markdownIframe';
import NoPost from './noPost';

import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

import './style.scss';
interface IPost {
  content: string;
}

const MarkdownContainer: React.FC<IPost> = ({ content = '' }) => {
  return (
    <div className="markdown-container">
      {content ? (
        <ReactMarkdown
          components={{
            code: MarkDownCodeBlock,
            img: MarkDownImage,
            h1: MarkDownH1,
            h2: MarkDownH2,
            // h2: ({ node, ...props }) => <div style={{ color: 'red' }} {...props}></div>,
            blockquote: MarkDownBlockQuote,
            // blockquote: ({ node, ...props }) => <div style={{ color: 'red' }} {...props}></div>,
            p: ({ node, ...props }) => (
              <span {...props} style={{ margin: '10px 0 10px 0', display: 'block', textAlign: 'left' }}></span>
            ),
            table: ({ node, ...props }) => <table className="markdown-table" {...props}></table>
          }}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[
            rehypeRaw,
            rehypeSanitize({
              ...defaultSchema,
              attributes: {
                ...defaultSchema.attributes,
                iframe: [...(defaultSchema.attributes.iframe || [])]
              }
            })
          ]}
        >
          {content}
        </ReactMarkdown>
      ) : (
        <NoPost />
      )}
    </div>
  );
};

export default MarkdownContainer;
