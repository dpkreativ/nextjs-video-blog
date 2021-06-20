const Video = ({ src }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};
export default Video;
