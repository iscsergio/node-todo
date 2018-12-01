const argv = require('yargs')
    .command('crear','Crea un elemento TODO', {
        descripcion : {
            demand: true,
            alias: 'd',
            desc: "Descripción de la tarea por hacer"
        }
    })
    .command('actualizar','Actualiza un elemento TODO',{
        descripcion : {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: "Marca como completada la tarea."
        }
    })
    .command('eliminar','Borra un elemento TODO',{
        descripcion : {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}