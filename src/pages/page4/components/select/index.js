import s from './style.module.css';

const Select = (props) => {
  const onSelect = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <select className={s.select} value={props.value} onChange={onSelect}>
      {props.options.map((item) => {
        <option key={item.value} value={item.value}>
          {item.title}
        </option>;
      })}
    </select>
  );
};

export default Select;
