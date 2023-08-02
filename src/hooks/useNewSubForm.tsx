import { useReducer } from 'react'
import { Sub } from '../types'

interface FormState {
  InputValues: Sub
}

type FormReducerAction = {
  type: 'change-value',
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: 'clear'
}

const INITIAL_STATE = {
  nick: '',
  subMonths: 0,
  avatar: '',
  description: ''
}

const formReducer = (state: FormState['InputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change-value': {
      const { inputName, inputValue } = action.payload

      return {
        ...state,
        [inputName]: inputValue
      }
    }

    case 'clear': {
      return INITIAL_STATE
    }
  }
}

const useNewSubForm = () => {
  const [inputValues, dispatch] = useReducer(formReducer, INITIAL_STATE)

  const clearForm = () => {
    dispatch({ type: 'clear' })
  }

  const changeValues = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'change-value',
      payload: {
        inputName: evt.target.name,
        inputValue: evt.target.value
      }
    })
  }

  return {
    inputValues,
    clearForm,
    changeValues
  }
}

export default useNewSubForm
