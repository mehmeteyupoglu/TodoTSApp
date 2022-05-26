export type Todo = {
    id: string;
    title: string;
    completed: boolean;
}

let todos: Array<Todo> = [];

todos = [
    {
        id: '1',
        title: '1-Go Shopping',
        completed: false
    }, 
    {
        id: '2',
        title: '2-Clean the house',
        completed: false
    }, 
    {
        id: '3',
        title: '3-Eat dinner',
        completed: false
    }, 
    {
        id: '4',
        title: '1-Go Shopping',
        completed: false
    }, 
    {
        id: '5',
        title: '2-Clean the house',
        completed: false
    }, 
    {
        id: '6',
        title: '3-Eat dinner',
        completed: false
    }, 
    {
        id: '7',
        title: '1-Go Shopping',
        completed: false
    }, 
    {
        id: '8',
        title: '2-Clean the house',
        completed: false
    }, 
    {
        id: '9',
        title: '3-Eat dinner',
        completed: false
    }
]

export { todos };