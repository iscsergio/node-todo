const fs = require('fs');
let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('Error al crear el archivo', err);
    });
};

const readDB = () => {
    try{
        todoList = require('../db/data');
    }catch (e) {
        todoList = [];
    }
};

const create = (description) => {

    readDB();

    let toDo = {
        description,
        complete: false
    };

    todoList.push(toDo)
    saveDB();

    return toDo;
};

const update = (description, complete = true) => {
    readDB();

    let index = todoList.findIndex( task => {
        return task.description === description;
    });

    if(index > -1){
        todoList[index].complete = complete;
        saveDB();
        return true;
    }

    return false;
};

const remove = (description) => {
    readDB();

    let index = todoList.findIndex( task => {
        return task.description === description;
    });

    if(index > -1){
        todoList.splice(index, 1);
        saveDB();
        return true;
    }
    return false;
}

const getList = () => {
    readDB();
    return todoList;
};

module.exports = {
    create,
    update,
    remove,
    getList
};