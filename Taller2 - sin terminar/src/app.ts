// app.ts
import { createCanal, getCanales, createPrograma, getProgramas, createGuia, getGuias } from './crud';

async function main() {
  // Crear un canal
  const nuevoCanal = await createCanal('Canal 1');
  console.log('Nuevo Canal:', nuevoCanal);

  // Consultar todos los canales
  const canales = await getCanales();
  console.log('Canales:', canales);

  // Crear un programa
  const nuevoPrograma = await createPrograma('Programa 1', 'Categoría A', 'Tipo X');
  console.log('Nuevo Programa:', nuevoPrograma);

  // Consultar todos los programas
  const programas = await getProgramas();
  console.log('Programas:', programas);

  // Crear una guía
  const nuevaGuia = await createGuia(nuevoCanal.id, nuevoPrograma.id, new Date(), '18:00', '5/5');
  console.log('Nueva Guía:', nuevaGuia);

  // Consultar todas las guías
  const guias = await getGuias();
  console.log('Guías:', guias);
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
