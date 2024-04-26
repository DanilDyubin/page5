import { useCallback, useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

const Search = (props) => {
  // Внутренний стейт для быстрого отображения ввода, т/к из-за задержки debounce не успевает меняться состояние
  const [value, setValue] = useState(props.value);

  const dispatch = useDispatch();

  const onChangeDebounce = useCallback(
    debounce((value) => dispatch(props.onChange(value)), 500),
    [props.onChange],
  );

  const onChange = (e) => {
    setValue(e.target.value); // меняем сперва внутренний стейт
    onChangeDebounce(e.target.value); // потом внешний
  };

  // обновление стейта, если передан новый value (но тут непонятно насколько это нужно :/)
  useLayoutEffect(() => setValue(props.value), [props.value]);

  return (
    <input type={props.type} value={value} placeholder={props.placeholder} onChange={onChange} />
  );
};

export default Search;
