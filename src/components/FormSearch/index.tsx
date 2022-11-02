import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Styled from './styles'

type FormSearchProps = {
  placeholder: string
  icon: string
  alt: string
}

const FormSearch = ({ placeholder, icon, alt }: FormSearchProps) => {
  const [inputValue, setInputValue] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (inputValue) {
      navigate(`/search?restaurant=${inputValue}`)
    }
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
