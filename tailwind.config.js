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
                primary: "#A855F7",
                secondary: "#C084FC",
                yellow:"#ffec47"
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
    plugins: [],
};
