module.exports = {
  plugins: [
    require("postcss-import"),
    require("tailwindcss/nesting"),
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production" && require("cssnano"),
  ].filter(Boolean),
};
