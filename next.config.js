const withMdxEnhanced = require("next-mdx-enhanced");

module.exports = withMdxEnhanced({
  layoutPath: "./layouts",
  defaultLayout: true,
  fileExtensions: ["mdx"],
  usesSrc: false,
})({ webpack5: false });
