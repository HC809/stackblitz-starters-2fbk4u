import React from 'react';
import { MagnifyingGlassIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

interface SearchFormProps {
  dni: string;
  setDni: React.Dispatch<React.SetStateAction<string>>;
  searchEmployee: () => void;
  clearForm: () => void;
  isDisabled: boolean;
  isLoading: boolean;
}

const SearchForm = ({
  dni,
  setDni,
  searchEmployee,
  clearForm,
  isDisabled,
  isLoading,
}: SearchFormProps) => (
  <div>
    <label htmlFor="dni" className="block  font-medium text-gray-700">
      DNI
    </label>
    <input
      className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      value={dni}
      onChange={(e) => setDni(e.target.value)}
      placeholder="Ingrese DNI..."
    />
    <div className="flex items-center justify-between mt-4 mb-4">
      <button
        className={`px-4 py-2 font-bold text-white rounded flex items-center ${
          isDisabled || isLoading
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-blue-500 hover:bg-blue-700'
        } focus:outline-none focus:shadow-outline`}
        onClick={searchEmployee}
        disabled={isDisabled || isLoading}
      >
        {isLoading ? (
          <ArrowPathIcon className="w-4 h-4 animate-spin mr-2" />
        ) : (
          <MagnifyingGlassIcon className="w-4 h-4 mr-2" />
        )}
        {isLoading ? 'Cargando...' : 'Consultar'}
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-gray-400 rounded hover:bg-gray-500 focus:outline-none focus:shadow-outline"
        onClick={clearForm}
      >
        Limpiar
      </button>
    </div>
  </div>
);

export default SearchForm;
