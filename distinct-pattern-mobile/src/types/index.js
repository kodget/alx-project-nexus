// Type definitions for the mobile app (using JSDoc for type hints)

/**
 * @typedef {Object} Product
 * @property {string} _id - Product ID
 * @property {string} name - Product name
 * @property {string} slug - Product slug
 * @property {string} description - Product description
 * @property {number} price - Product price
 * @property {number} availablequantity - Available quantity
 * @property {Category} category - Product category
 * @property {Variation[]} variations - Product variations
 * @property {Image[]} images - Product images
 * @property {number} ratings - Product ratings
 * @property {boolean} inStock - Stock status
 */

/**
 * @typedef {Object} Category
 * @property {string} _id - Category ID
 * @property {string} title - Category title
 * @property {string} slug - Category slug
 * @property {string} description - Category description
 */

/**
 * @typedef {Object} Variation
 * @property {string} _key - Variation key
 * @property {number} quantity - Variation quantity
 * @property {string} color - Variation color
 */

/**
 * @typedef {Object} Image
 * @property {Asset} asset - Image asset
 */

/**
 * @typedef {Object} Asset
 * @property {string} url - Image URL
 */

/**
 * @typedef {Object} CartItem
 * @property {string} id - Item ID
 * @property {string} name - Item name
 * @property {number} price - Item price
 * @property {number} quantity - Item quantity
 * @property {Image[]} images - Item images
 * @property {Category} category - Item category
 */

/**
 * @typedef {Object} User
 * @property {string} id - User ID
 * @property {string} name - User name
 * @property {string} email - User email
 * @property {string} avatar - User avatar URL
 */

export {};