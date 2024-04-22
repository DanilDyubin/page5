export function numberFormat(value, locale = 'ru-Ru', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}

export function getUniqueNumber(items) {
  // получаем уникальный code для нового item
  let maxNumber = 0;
  items.map((item) => {
    if (maxNumber < item.code) {
      maxNumber = item.code;
    }
  });
  return (maxNumber = maxNumber + 1);
}

export function pluralize(amount) {
  if (amount % 10 === 1 && amount % 100 !== 11) {
    return amount + ' товар';
  } else if (amount % 10 >= 2 && amount % 10 <= 4 && (amount % 100 < 10 || amount % 100 >= 20)) {
    return amount + ' товара';
  } else {
    return amount + ' товаров';
  }
}

export async function getOneProduct(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const result = response.json();
  return result;
}

export async function getOneProduct4(id) {
  const response = await fetch(`https://652e6d590b8d8ddac0b15c7e.mockapi.io/phones?id=${id}`);
  const result = response.json();
  return result;
}
