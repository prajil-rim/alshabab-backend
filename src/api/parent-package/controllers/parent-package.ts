/**
 * parent-package controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::parent-package.parent-package",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;
            const parentPackage = await strapi.entityService.findMany(
                "api::parent-package.parent-package",
                {
                    filters: { package_slug: slug },
                    limit: 1,
                    ...ctx.query,
                }
            );

            const singlePackage = parentPackage[0]; // safely extract it

            if (!singlePackage) {
                return ctx.notFound("Parent Package not found");
            }

            const sanitized = await this.sanitizeOutput(singlePackage, ctx);
            return this.transformResponse(sanitized);
        },
    })
);
