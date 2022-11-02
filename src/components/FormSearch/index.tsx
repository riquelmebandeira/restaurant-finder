import { FormEvent, useState } from 'react'
import * as Styled from './styles'

type FormSearchProps = {
  placeholder: string
  icon: string
  alt: string
  setSearchTerm: Function
}

const FormSearch = ({
  placeholder,
  icon,
  alt,
  setSearchTerm
}: FormSearchProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSearchTerm(inputValue)
  }

  return (
    <Styled.Form
      onSubmit={handleSubmit}
      aria-label="form"
    >
      <img
        src={icon}
        alt={alt}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
    </Styled.Form>
  )
}

export default FormSearch
