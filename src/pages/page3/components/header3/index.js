import s from './style.module.css';

const Header = ({ title }) => {
  return (
    <header className={s.header}>
      <h2 className={s.title}>{title}</h2>
    </header>
  );
};

export default Header;
