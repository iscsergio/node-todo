const argv = require('./config/yargs').argv;
const todo = require('./to-do/to-do');
const colors = require('colors')

let command =  argv._[0];

switch (command){

    case 'crear':
        let toDo = todo.create(argv.descripcion);
        console.log(toDo);
        break;
    case 'listar':
        let toDoList = todo.getList();
           for(let task of toDoList){
                console.log("=========== TO-DO LIST ================".green);
                console.log(task.description);
                console.log('Estado:',task.complete);
                console.log("=======================================".green);
            }
        break;
    case 'actualizar':
        let actualizado = todo.update(argv.descripcion, argv.completado);
        break;

    case 'eliminar':
        let eliminado = todo.remove(argv.descripcion, argv.completado);
        break;
    default:
        console.log("Comando no reconocido");
        break;

}