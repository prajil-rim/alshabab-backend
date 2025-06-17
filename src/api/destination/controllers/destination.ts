/**
 * destination controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::destination.destination",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;

            const destination = await strapi.entityService.findMany(
                "api::destination.destination",
                {
                    filters: { slug: id },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singleDestination = destination[0]; // safely extract it

            if (!singleDestination) {
                return ctx.notFound("Destination not found");
            }

            const sanitized = await this.sanitizeOutput(singleDestination, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
