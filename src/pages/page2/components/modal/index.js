import s from './style.module.css';

const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? s.modal + ` ` + s.active : s.modal} onClick={() => setActive(false)}>
      <div className={s.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
