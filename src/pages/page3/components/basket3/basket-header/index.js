import s from './style.module.css';

const BasketHeader = ({ title, setActive }) => {
  return (
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
      <button onClick={() => setActive(false)}>Закрыть</button>
    </header>
  );
};

export default BasketHeader;
