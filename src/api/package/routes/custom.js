module.exports = {
    routes: [
        {
            method: "GET",
            path: "/packages/:slug",
            handler: "package.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
