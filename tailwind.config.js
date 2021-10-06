module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": "Helvetica Neue"
        },
        extend: {
            primary: "#6DDFC7"
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
