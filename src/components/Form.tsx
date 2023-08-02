import { Sub } from '../types'
import useNewSubForm from '../hooks/useNewSubForm'

interface FormProps {
  // onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
  onNewSub: (newSub: Sub) => void
}

const Form = ({ onNewSub }: FormProps) => {
  // const [inputValues, setInputValues] = useState<FormState['InputValues']>(INITIAL_STATE)
  const { inputValues, changeValues, clearForm } = useNewSubForm()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    onNewSub(inputValues)

    clearForm()
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    changeValues(evt)

    // setInputValues({
    //   ...inputValues,
    //   [evt.target.name]: evt.target.value
    // })
  }

  const handleClear = () => {
    clearForm()
    // setInputValues(INITIAL_STATE)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder='Nick...' />
        <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder='SubMonths...' />
        <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder='Avatar...' />
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder='Description...' />
        <button type='button' onClick={handleClear}>Clear the fields</button>
        <button type='submit'>Save new sub!</button>
      </form>
    </div>
  )
}

export default Form
