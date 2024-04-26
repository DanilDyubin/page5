import React from 'react';
import Search from '../search';
import s from './style.module.css';

const SideLayout = ({ children }) => {
  return (
    <div className={s.SideLayout}>
      {React.Children.map(children, (child) => (
        <div key={child.key} className={s['SideLayout-item']}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default SideLayout;
