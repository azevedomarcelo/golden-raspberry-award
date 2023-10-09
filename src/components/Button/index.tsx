import { ButtonHTMLAttributes } from "react";

import { Button as ButtonComponent } from './styles';

type TProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

export const Button = ({ children, ...rest }: TProps) => {
  return (
    <ButtonComponent
      type="button"
      {...rest}
    >
      {children}
    </ButtonComponent>
  )
}