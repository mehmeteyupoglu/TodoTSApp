export type Todo = {
    id: number;
    title: string;
    completed: boolean;
}

let todos: Array<Todo> = [];

todos = [
    {
        id: 1,
        title: '1-Go Shopping',
        completed: false
    }, 
    {
        id: 2,
        title: '2-Clean the house',
        completed: false
    }, 
    {
        id: 3,
        title: '3-Eat dinner',
        completed: false
    }
]

export { todos };