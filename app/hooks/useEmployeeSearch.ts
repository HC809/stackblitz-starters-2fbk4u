import { useState } from 'react';
import { Employee } from '../types/employee';

export const useEmployeeSearch = () => {
  const [dni, setDni] = useState('');
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const unknownError = 'Ocurrió un error al realizar la solicitud';

  const searchEmployee = async () => {
    if (!dni.trim()) {
      setError('Por favor ingrese un DNI válido.');
      setEmployee(null);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/employees?dni=${dni}`);
      if (res.ok) {
        const employeeData: Employee = await res.json();
        setEmployee(employeeData);
        setError('');
      } else {
        const errorData = await res.json();
        setError(errorData.message || unknownError);
        setEmployee(null);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || unknownError);
      } else {
        setError(unknownError);
      }
      setEmployee(null);
    } finally {
      setLoading(false);
    }
  };

  const clear = (): void => {
    setDni('');
    setEmployee(null);
    setError('');
  };

  return {
    dni,
    setDni,
    employee,
    searchEmployee,
    clearForm: () => clear(),
    error,
    loading,
  };
};
