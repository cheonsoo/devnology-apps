export default function MarkdownIframe(props: { src: string }) {
  return (
    <div>
      <iframe src={props.src} />
    </div>
  );
}
