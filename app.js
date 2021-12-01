import { Todo } from './Todo.js'
import { TodoList } from './TodoList.js'


console.log(
    `Parancssori Todo applikáció /n
 ============================= 
    
 Parancssori argumentumok:
        -l   Kilistázza a feladatokat
        -a   Új feladatot ad hozzá
        -r   Eltávolít egy feladatot
        -c   Teljesít egy feladatot`
);




TodoList.unshift(new Todo('Kutyát sétáltatni'))
TodoList.unshift(new Todo('Tejet venni'))
TodoList.unshift(new Todo('Megcsinálni a leckét'))


const argum = process.argv[2];

if (argum == "-l") {
    console.log(TodoList);
}
else if("-a"){

}


