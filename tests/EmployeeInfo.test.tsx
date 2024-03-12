import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmployeeInfo from '@/app/components/EmployeeInfo';
import { formatBirthDate } from '@/app/helpers/general';

const mockEmployee = {
  dni: '1234567890',
  fullName: 'Juan Pérez',
  birthDate: new Date('1990-01-01'),
  legajoNumber: '123456',
};

describe('EmployeeInfo', () => {
  test('renders employee information', () => {
    render(<EmployeeInfo employee={mockEmployee} />);

    expect(
      screen.getByText(`Nombre Completo: ${mockEmployee.fullName}`)
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        `Fecha de Nacimiento: ${formatBirthDate(mockEmployee.birthDate)}`
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(`Número de Legajo: ${mockEmployee.legajoNumber}`)
    ).toBeInTheDocument();
  });
});
