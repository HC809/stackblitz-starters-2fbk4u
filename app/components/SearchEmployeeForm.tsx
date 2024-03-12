import React from 'react';
import ErrorMessage from './ui/ErrorMessage';
import EmployeeInfo from './EmployeeInfo';
import { useEmployeeSearch } from '../hooks/useEmployeeSearch';
import SearchForm from './SearchForm';

export default function SearchEmployee() {
  const { dni, setDni, employee, searchEmployee, clearForm, error, loading } =
    useEmployeeSearch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-md mt-8 mb-4">
        <h1 className="text-center text-xl font-semibold mb-16">
          Consulta de Legajo de Empleado
        </h1>
        <SearchForm
          dni={dni}
          setDni={setDni}
          searchEmployee={searchEmployee}
          clearForm={clearForm}
          isDisabled={employee ? dni === employee.dni : false}
          isLoading={loading}
        />
        {error && <ErrorMessage message={error} />}
        {employee && <EmployeeInfo employee={employee} />}
      </div>
    </div>
  );
}
