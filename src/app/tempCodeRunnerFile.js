const items = [
  { code: 1, title: 'Книга' },
  { code: 2, title: 'Тетрадь' },
  { code: 13, title: 'Карандаш' },
  { code: 4, title: 'Ручка' },
  { code: 5, title: 'Блокнот' },
];

const getUniqueNumber = () => {
  let maxNumber = 0;
  items.map((item) => {
    if (maxNumber < item.code) {
      maxNumber = item.code;
    }
  })
  return maxNumber = maxNumber + 1;
}

console.log(getUniqueNumber());