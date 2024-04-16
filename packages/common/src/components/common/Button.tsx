import { MouseEvent } from 'react';

interface IButtonProps {
  value?: string;
  className?: string;
  style?: object;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
  return (
    <button className={props.className} style={props.style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
