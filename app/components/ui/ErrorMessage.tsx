import React from 'react';
import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

const ErrorMessage = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <div className="flex items-center text-red-500">
      <ExclamationCircleIcon className="w-5 h-5 mr-2" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
