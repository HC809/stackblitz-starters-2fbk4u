import React from 'react';
import { Employee } from '../types/employee';
import { CakeIcon, UserIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { formatBirthDate } from '../helpers/general';

const EmployeeInfo = ({ employee }: { employee: Employee }) => {
  return (
    <div className="mt-4 p-4 bg-white rounded shadow">
      <p className="flex items-center" data-testid="fullNameText">
        <UserIcon className="w-5 h-5 mr-2 text-green-500" />
        Nombre Completo: {employee.fullName}
      </p>
      <p className="flex items-center">
        <CakeIcon className="w-5 h-5 mr-2 text-green-500" />
        Fecha de Nacimiento: {formatBirthDate(new Date(employee.birthDate))}
      </p>
      <p className="flex items-center">
        <CheckBadgeIcon className="w-5 h-5 mr-2 text-green-500" />
        Número de Legajo: {employee.legajoNumber}
      </p>
    </div>
  );
};

export default EmployeeInfo;
