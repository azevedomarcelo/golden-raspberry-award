import { InputHTMLAttributes } from 'react'
import { InputComponent } from './styles'

export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <InputComponent
      type="text"
      {...rest}
    />
  )
}