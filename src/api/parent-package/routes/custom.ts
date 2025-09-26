export default {
    routes: [
        {
            method: "GET",
            path: "/parent-packages/:slug",
            handler: "parent-package.findOne",
            config: {
                auth: false,
            },
        },
    ],
};
