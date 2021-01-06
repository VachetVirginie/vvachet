module.exports = {
    preset: "@vue/cli-plugin-unit-jest",
    collectCoverage: true,
    coverageReporters: ["html", "text-summary"],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
};

