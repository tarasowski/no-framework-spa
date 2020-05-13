import { todo } from "./state"

export const List = document.createElement("ul")

const updateList = () => {
  List.innerHTML = ""
  todo.list.forEach(name => {
    const todo = document.createElement("li")
    todo.textContent = name
    List.appendChild(todo)
  })
}

window.addEventListener("store:list", updateList)

