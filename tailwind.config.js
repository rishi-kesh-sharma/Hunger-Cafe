const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  // corePlugins: {
  //   preflight: false,
  // },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF2A00",
        secondary: "#f5f2f0",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.2xl"),
        },
        h2: {
          fontSize: theme("fontSize.xl"),
        },
        h3: {
          fontSize: theme("fontSize.lg"),
        },
        h4: {
          fontSize: theme("fontSize.md"),
        },
        b: {
          fontWeight: theme("fontWeight.bold"),
        },
        strong: {
          fontWeight: theme("fontWeight.bold"),
        },
        i: {
          fontWeight: theme("fontStyle.italic"),
        },
      });
    }),
  ],
});

//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

// module.exports = {
//   // ...
//   plugins: [
//     plugin(function ({ addBase, addComponents, addUtilities, theme }) {
//       addBase({
//         h1: {
//           fontSize: theme("fontSize.2xl"),
//         },
//         h2: {
//           fontSize: theme("fontSize.xl"),
//         },
//       });
//       addComponents({
//         ".card": {
//           backgroundColor: theme("colors.white"),
//           borderRadius: theme("borderRadius.lg"),
//           padding: theme("spacing.6"),
//           boxShadow: theme("boxShadow.xl"),
//         },
//       });
//       addUtilities({
//         ".content-auto": {
//           contentVisibility: "auto",
//         },
//       });
//     }),
//   ],
// };
