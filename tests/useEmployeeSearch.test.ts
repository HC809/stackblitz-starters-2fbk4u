import React from 'react';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';
import { useEmployeeSearch } from '@/app/hooks/useEmployeeSearch';

describe('useEmployeeSearch', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should set error message if DNI is empty', async () => {
    const { result } = renderHook(() => useEmployeeSearch());

    await act(async () => {
      await result.current.searchEmployee();
    });

    expect(result.current.error).toBe('Por favor ingrese un DNI válido.');
  });
});
