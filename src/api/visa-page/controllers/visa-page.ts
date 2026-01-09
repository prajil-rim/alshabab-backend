/**
 * visa-page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::visa-page.visa-page",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;

            const visa = await strapi.entityService.findMany(
                "api::visa-page.visa-page",
                {
                    filters: { slug },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singleVisa = visa[0]; // safely extract it

            if (!singleVisa) {
                return ctx.notFound("Visa not found");
            }

            const sanitized = await this.sanitizeOutput(singleVisa, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
