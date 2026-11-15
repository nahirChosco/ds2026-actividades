const CLAVE = 'token';
export const obtenerToken = (): string | null => localStorage.getItem(CLAVE);
export const guardarToken = (token: string) => localStorage.setItem(CLAVE, token);
export const borrarToken = () => localStorage.removeItem(CLAVE);