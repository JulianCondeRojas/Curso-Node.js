const os = require('node:os')

console.log('Información del SO:');
console.log('-------------------');

console.log('Nombre',os.platform());
console.log('Versión',os.release());
console.log('Arquitectura',os.arch());
console.log('Núcleos del procesador',os.cpus());