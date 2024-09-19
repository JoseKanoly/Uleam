// crud.ts
import prisma from './prismaClient';

// Crear un nuevo canal
export async function createCanal(nombre: string) {
  return await prisma.canal.create({
    data: {
      nombre,
    },
  });
}

// Consultar todos los canales
export async function getCanales() {
  return await prisma.canal.findMany();
}

// Crear un nuevo programa
export async function createPrograma(nombre: string, categoria: string, tipo: string) {
  return await prisma.programa.create({
    data: {
      nombre,
      categoria,
      tipo,
    },
  });
}

// Consultar todos los programas
export async function getProgramas() {
  return await prisma.programa.findMany();
}

// Crear una nueva guía
export async function createGuia(canalId: number, programaId: number, fecha: Date, horaTransmision: string, rating: string) {
  return await prisma.guia.create({
    data: {
      canalId,
      programaId,
      fecha,
      horaTransmision,
      rating,
    },
  });
}

// Consultar todas las guías
export async function getGuias() {
  return await prisma.guia.findMany({
    include: {
      canal: true, // Incluye detalles del canal
      programa: true, // Incluye detalles del programa
    },
  });
}
