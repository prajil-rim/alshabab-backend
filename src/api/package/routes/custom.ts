export default {
    routes: [
        {
            method: "GET",
            path: "/packages/filter",
            handler: "package.filterPackages", // Link to your new controller action
            config: {
                auth: false, // Set to false if you want it to be a public route
            },
        },
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
