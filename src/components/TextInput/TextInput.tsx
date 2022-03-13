import { useRef } from 'react';
import {ITextInputProps}  from './types';
import './styles.css';

const TextInput = ({todo, setTodo, handleAddTodo}: ITextInputProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    return(
        <form className='input' onSubmit={(e) => {
            handleAddTodo(e)
            inputRef.current?.blur()
        }}>
            <input
                ref={inputRef} 
                type="input" 
                placeholder='Enter a task' 
                className='input__box' 
                value={todo} 
                onChange={
                    (e) => {
                        setTodo(e.target.value)
                    }
                } /> 
            <button className='input__submit' type='submit'>Go</button>
        </form>
    )
}

export default TextInput;