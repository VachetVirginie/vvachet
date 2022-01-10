module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": "Helvetica Neue"
        },
        extend: {
            colors: {
                primary: "#6768AB",
                pink: "#A9A7DA",
                yellow:"#ffec47"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
