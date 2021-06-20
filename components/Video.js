const Video = ({ src }) => {
  return (
    <div className="iframe-container">
      <iframe
        src={src}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      ></iframe>

      <style jsx>
        {`
          .iframe-container {
            overflow: hidden;
            padding-top: 56.25%;
            position: relative;
          }
          .iframe-container iframe {
            height: 100%;
            width: 100%;
            left: 0;
            position: absolute;
            top: 0;
          }
        `}
      </style>
    </div>
  );
};
export default Video;
