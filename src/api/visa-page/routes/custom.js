module.exports = {
    routes: [
        {
            method: "GET",
            path: "/visa-pages/:slug",
            handler: "visa-page.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
