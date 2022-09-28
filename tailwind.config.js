const { createTailwindConfig } = require("@charcoal-ui/tailwind-config");

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  mode: "jit",
  presets: [createTailwindConfig({ version: "v3" })],
  theme: {
    extend: {
      opacity: {
        32: "0.32",
      },
    },
  },
};
