/**
 * package controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
    "api::package.package",
    ({ strapi }) => ({
        async findOne(ctx) {
            const { slug } = ctx.params;
            const package_ = await strapi.entityService.findMany(
                "api::package.package",
                {
                    filters: { slug },
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

        async filterPackages(ctx) {
            const { parentPackage, packageCategories } = ctx.query;

            const filter = {
                parentPackage: {
                    package_slug: {
                        $eq: parentPackage as string,
                    },
                },
            };

            if (
                packageCategories &&
                packageCategories !== "null" &&
                (packageCategories as string).length > 0
            ) {
                // @ts-expect-error: package_categories is a relation
                filter.package_general_info = {
                    package_categories: {
                        slug: {
                            $in: (packageCategories as string).split(
                                ","
                            ) as string[],
                        },
                    },
                };
            }
            const entries = await strapi.entityService.findMany(
                "api::package.package",
                {
                    filters: filter,
                    status: "published",
                    ...ctx.query,
                }
            );

            return this.transformResponse(entries);
        },
    })
);
