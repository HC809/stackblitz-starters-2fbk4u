export const formatBirthDate = (inputDate: Date | string): string => {
  let birthDate = new Date(inputDate);

  if (!(birthDate instanceof Date) || isNaN(birthDate.getTime())) {
    return 'Fecha inválida';
  }

  //Compensa la zona horaria para evitar el cambio de dia
  const userTimezoneOffset = birthDate.getTimezoneOffset() * 60000;
  birthDate = new Date(birthDate.getTime() + userTimezoneOffset);

  const formattedBirthDate = birthDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return formattedBirthDate;
};
