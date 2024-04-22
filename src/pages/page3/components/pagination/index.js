import { useState, useEffect } from 'react';
import s from './style.module.css';

const Pagination = ({ pag, setCurrentPage }) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const [currentBtns, setCurrentBtns] = useState([]);

  const pages = 10;
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  useEffect(() => {
    let visibleCurrentBtns = [...currentBtns];

    let dotsInitial = '...';
    let dotsRight = '... ';
    let dotsLeft = ' ...';

    if (activeBtn >= 1 && activeBtn <= 3) {
      visibleCurrentBtns = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
    }

    if (activeBtn === 4) {
      const sliced = numberOfPages.slice(0, 5);
      visibleCurrentBtns = [...sliced, dotsInitial, numberOfPages.length];
    }

    if (activeBtn > 4 && activeBtn < numberOfPages.length - 2) {
      const sliced1 = numberOfPages.slice(activeBtn - 2, activeBtn);
      const sliced2 = numberOfPages.slice(activeBtn, activeBtn + 1);
      visibleCurrentBtns = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length];
    }

    if (activeBtn > numberOfPages.length - 3) {
      const sliced = numberOfPages.slice(numberOfPages.length - 4);
      visibleCurrentBtns = [1, dotsLeft, ...sliced];
    }

    if (activeBtn === dotsInitial) {
      setActiveBtn(currentBtns[currentBtns.length - 3] + 1);
    }

    if (activeBtn === dotsLeft) {
      setActiveBtn(currentBtns[3] - 2);
    }

    if (activeBtn === dotsRight) {
      setActiveBtn(currentBtns[3] + 2);
    }

    setCurrentBtns(visibleCurrentBtns);
    setCurrentPage(activeBtn);
  }, [activeBtn]);

  return (
    <div className={s.pagination}>
      <a
        className={activeBtn === 1 ? s.btn + ' ' + s.disabled : s.btn}
        onClick={() => setActiveBtn((prev) => (prev === 1 ? prev : prev - 1))}>
        {'<'}
      </a>
      <div className={s.pages}>
        {currentBtns.map((item, i) => {
          return (
            <a
              key={i}
              className={activeBtn === item ? s.page + ' ' + s.active : s.page}
              onClick={() => setActiveBtn(item)}>
              {item}
            </a>
          );
        })}
      </div>
      <a
        className={activeBtn === numberOfPages.length ? s.btn + ' ' + s.disabled : s.btn}
        onClick={() => setActiveBtn((prev) => (prev === numberOfPages.length ? prev : prev + 1))}>
        {'>'}
      </a>
    </div>
  );
};

export default Pagination;
