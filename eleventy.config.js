module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_templates",
    },
  };
};
