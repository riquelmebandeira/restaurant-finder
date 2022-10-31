import { FormEvent, useState } from 'react'
import * as Styled from './styles'

type FormSearchProps = {
  placeholder: string
  icon: string
  setSearchTerm: Function
}

const FormSearch = ({ placeholder, icon, setSearchTerm }: FormSearchProps) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSearchTerm(inputValue)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <img
        src={icon}
        alt="ícone de pesquisa"
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
