import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
}

axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed
    const userId = todo.userId

    logTodo(id, title, completed, userId)
    // console.log(`
    //     The Todo with ID: ${id}
    //     Has a title of: ${title}
    //     It is finished? ${completed}
    // `)
})

const logTodo = (id:number, title:string, completed:boolean, userId:number = 30) => {

    console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        It is finished? ${completed}
        User Id: ${userId}
    `)
}

