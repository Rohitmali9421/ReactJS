import {createContext, useContext} from "react"

export const todocontext =createContext({
    todos:[
        {
            id:1,
            todo:"TODO Message",
            completed:true
        }
    ],
    addToDo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deleteToDo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useToDo=()=>{
    return useContext(todocontext)
}

export const ToDoProvider = todocontext.Provider