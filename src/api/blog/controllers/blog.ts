/**
 * blog controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::blog.blog",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;

            const blog = await strapi.entityService.findMany("api::blog.blog", {
                filters: { slug },
                limit: 1,
                ...ctx.query,
            });

            const singleBlog = blog[0]; // safely extract it

            if (!singleBlog) {
                return ctx.notFound("Blog not found");
            }

            const sanitized = await this.sanitizeOutput(singleBlog, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
