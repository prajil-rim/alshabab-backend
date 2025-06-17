export default {
    routes: [
        {
            method: "GET",
            path: "/destinations/:slug",
            handler: "destination.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
