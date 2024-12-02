'use strict';

/**
 * products-list service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::products-list.products-list');
