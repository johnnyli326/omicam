// 金錢千分號
export default (num) => {
  const n = Number(num);
  return `USD $${n.toFixed(2).replace(/./g, (c, i, a) => {
    const currency = (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c);
    return currency;
  })}`;
};
