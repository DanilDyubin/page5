import s from './style.module.css';

const Controls = ({ onAdd }) => {
  return (
    <div className={s.controls}>
      <button className={s.btn} onClick={() => onAdd()}>
        Добавить
      </button>
    </div>
  );
};

export default Controls;
