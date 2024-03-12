import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '@/app/components/SearchForm';

describe('SearchForm', () => {
  test('renders without crashing', () => {
    render(
      <SearchForm
        dni=""
        setDni={() => {}}
        searchEmployee={() => {}}
        clearForm={() => {}}
        isDisabled={false}
        isLoading={false}
      />
    );
    expect(screen.getByPlaceholderText(/Ingrese DNI.../i)).toBeInTheDocument();
  });

  test('button shows "Cargando..." when isLoading is true', () => {
    render(
      <SearchForm
        dni=""
        setDni={() => {}}
        searchEmployee={() => {}}
        clearForm={() => {}}
        isDisabled={false}
        isLoading={true}
      />
    );
    expect(screen.getByText(/Cargando.../i)).toBeInTheDocument();
  });

  test('search button is disabled when isDisabled is true', () => {
    render(
      <SearchForm
        dni=""
        setDni={() => {}}
        searchEmployee={() => {}}
        clearForm={() => {}}
        isDisabled={true}
        isLoading={false}
      />
    );
    expect(screen.getByText(/Consultar/i)).toBeDisabled();
  });
});
