import { todo } from "./state"

export const Input  = document.createElement("div")
const todoInput = document.createElement("input")
const addButton = document.createElement("button")

todoInput.placeholder = todo.name

addButton.textContent = "Add Todo"

todoInput.addEventListener("input", e => {
  todo.name = e.target.value
})

addButton.addEventListener("click", () => {
  todo.list = [...todo.list, todo.name]
  todo.name = ""
  todoInput.value = ""
})

Input.appendChild(todoInput)
Input.appendChild(addButton)
