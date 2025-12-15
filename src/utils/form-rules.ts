export const required = (value: string) => {
  return !!value || 'Campo obrigatório';
};

export const validEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Email inválido';
};
