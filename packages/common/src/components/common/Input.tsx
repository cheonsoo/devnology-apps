import { useState, ChangeEvent, KeyboardEvent } from 'react';

type TInputValue = string | number | ReadonlyArray<string>;
type TInputChangeEvent = ChangeEvent<HTMLInputElement>;
type TInputKeyboardEvent = KeyboardEvent<HTMLInputElement>;

interface IInputProps {
  value: string | number | ReadonlyArray<string>;
  className?: string;
  style?: object;
  onChange?: (evt: TInputChangeEvent) => void;
  onEnter?: (val: TInputValue) => void;
}

const default_style = {
  width: '150px',
  height: '25px',
  margin: '10px'
};

// const Input: React.FC<IInputProps> = ({ value = '', className = '', style = default_style, onChange, onEnter }) => {
const Input: React.FC<IInputProps> = (props: IInputProps) => {
  const [inputValue, setInputValue] = useState<TInputValue>('');

  const handleChange = (evt: TInputChangeEvent) => {
    setInputValue(evt.target.value);
    props.onChange && props.onChange(evt);
  };

  const handleEnter = (evt: TInputKeyboardEvent) => {
    if (evt.key === 'Enter') props.onEnter && props.onEnter(inputValue);
  };

  return (
    <input
      type="text"
      className={props.className}
      style={{ ...default_style, ...props.style }}
      value={inputValue}
      onChange={handleChange}
      onKeyUp={handleEnter}
    />
  );
};

export default Input;
