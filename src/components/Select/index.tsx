import { SelectHTMLAttributes } from "react"
import { SelectComponent } from "./styles"

type TSelect = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: number
    label: string
  }[]
}

export const Select = ({ options, ...rest }: TSelect) => {
  return (
    <SelectComponent
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectComponent>
  )
}