module.exports = function (eleventyConfig) {
  const htmlmin = require("html-minifier");
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");

  // Passthrough all images
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPassthroughCopy("./src/sw.js");
  eleventyConfig.addPassthroughCopy("./src/*.png");
  eleventyConfig.addPassthroughCopy("./src/*.svg");
  //eleventyConfig.addPassthroughCopy("./src/assets/css/");

  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  // Transforms
  // minify the html output when running in production
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
      if (outputPath.endsWith(".html")) {
        let minified = htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        });
        return minified;
      }

      return content;
    });
  }

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
  };
};
