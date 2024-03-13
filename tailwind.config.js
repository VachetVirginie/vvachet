module.exports = {
    mode: "jit",
    purge: ["./src/**/*.html", "./src/**/*.vue"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": "Helvetica Neue"
        },
        extend: {
            colors: {
                // primary: "#5311DF",
                // primary: "#BC2649",
                primary: "#fe3769",
                secondary: "#015950",
                tertiary: "#F8E3AF",
                yellow_primary: "#EDFCC2",
                yellow_secondary: "#D3A400",
                dark: "#151515"
            },
            zIndex: {
                "-10": "-10",
            },
            keyframes: {
                "wiggle": {
                    "0%, 100%": {
                        transform: "rotate(5deg)", "transform-origin": "right bottom"
                    },
                    "50%": {
                        transform: "rotate(30deg)", "transform-origin": "right bottom"
                    },
                },
            },
            animation: {
                "wiggle": "wiggle 1s ease-in-out infinite",
                "spin-vinyl": "spin 2s linear infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    content: ["./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"],
    corePlugins: {
        fill: true,
    },
    plugins: [require("tw-elements/dist/plugin"),
              function ({ addUtilities }) {
                  const newUtilities = {
                      ".fill-secondary": {
                          fill: "#015950",
                      },
                  };
                  addUtilities(newUtilities, ["responsive", "hover"]);
              }],
};
