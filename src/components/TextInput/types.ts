import { FormEvent } from "react";

export interface ITextInputProps {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    handleAddTodo: (e: FormEvent) => void,
}
