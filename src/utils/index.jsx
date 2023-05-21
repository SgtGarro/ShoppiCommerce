/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of products
 * @returns {number}
 */
export const totalPrice = function (products) {
  const total = products.reduce((prev, cur) => prev + cur.price, 0);
  return total;
};
