import { Link } from 'react-router-dom';

import s from './style.module.css';

const Menu = () => {
  return (
    <div className={s.menu}>
      <Link to="/">
        <button>Page 1</button>
      </Link>
      <Link to="/page2">
        <button>Page 2</button>
      </Link>
      <Link to="/page3">
        <button>Page 3</button>
      </Link>
      <Link to="/page4">
        <button>Page 4</button>
      </Link>
    </div>
  );
};

export default Menu;
