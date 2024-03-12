import { Employee } from '@/app/types/employee';
import { NextApiRequest, NextApiResponse } from 'next';

const employees: Employee[] = [
  {
    dni: '12345678',
    fullName: 'Hector Caballero',
    birthDate: new Date('1994-04-12'),
    legajoNumber: 'EMP001',
  },
  {
    dni: '23456789',
    fullName: 'Ana Gómez',
    birthDate: new Date('1998-03-27'),
    legajoNumber: 'EMP002',
  },
  {
    dni: '34567890',
    fullName: 'Carlos Sánchez',
    birthDate: new Date('1997-12-24'),
    legajoNumber: 'EMP003',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { dni } = req.query;
    const employee = employees.find((emp) => emp.dni === dni);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res
        .status(404)
        .json({ message: `Empleado con DNI ${dni} no encontrado.` });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
