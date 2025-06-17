/**
 * package controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::package.package",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { id } = ctx.params;

            const package_ = await strapi.entityService.findMany(
                "api::package.package",
                {
                    filters: { slug: id },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singlePackage = package_[0]; // safely extract it

            if (!singlePackage) {
                return ctx.notFound("Package not found");
            }

            const sanitized = await this.sanitizeOutput(singlePackage, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
