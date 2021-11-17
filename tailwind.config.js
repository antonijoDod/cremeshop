module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                black: "#232323",
                gray: {
                    primary: "#3C3C3C",
                },
            },
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "996px",
            xl: "1248px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
