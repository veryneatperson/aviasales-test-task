const displayPrice = (price, currency) => {
  const strPrice = price.toString();
  if (strPrice.length > 3) {
    return `${strPrice.slice(0, -3)} ${strPrice.slice(-3)} ${currency}`;
  }
  return strPrice;
};

export default displayPrice;
