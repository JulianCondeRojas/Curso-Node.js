import { platform, release, arch, cpus } from 'node:os';

console.log('Información del SO:');
console.log('-------------------');

console.log('Nombre',platform());
console.log('Versión',release());
console.log('Arquitectura',arch());
console.log('Núcleos del procesador',cpus());

