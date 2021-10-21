module.exports = {
    purge: ["./src/**/*.html", "./src/**/*.vue"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        fontFamily: {
            "sans": "Helvetica Neue"
        },
        extend: {
            colors: {
                primary: "#6ddfc7",
                pink: "#f20553",
                yellow:"#ffec47"
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
