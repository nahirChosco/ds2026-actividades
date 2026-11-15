import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../../context/AuthContext';
import type { Usuario, Rol } from '../../types/sesionType';

function renderHeader(usuario: Usuario | null) {
  const auth = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: Rol) => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  };
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={auth}>
        <Header />
      </AuthContext.Provider>
    </MemoryRouter>,
  );
}

describe('Header según la sesión', () => {
  it('sin sesión: muestra Ingresar y no Nuevo libro', () => {
    renderHeader(null);
    expect(screen.getByText('Ingresar')).toBeInTheDocument();
    expect(screen.queryByText('Salir')).not.toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('CLIENTE: muestra Salir y NO ve Nuevo libro', () => {
    renderHeader({ id: 2, email: 'cliente@libreria.test', nombre: 'Juan Cliente', rol: 'CLIENTE' });
    expect(screen.getByText('Salir')).toBeInTheDocument();
    expect(screen.queryByText('Nuevo libro')).not.toBeInTheDocument();
  });

  it('ADMIN: ve el link Nuevo libro', () => {
    renderHeader({ id: 1, email: 'admin@libreria.test', nombre: 'Admin', rol: 'ADMIN' });
    expect(screen.getByRole('link', { name: 'Nuevo libro' })).toBeInTheDocument();
    expect(screen.getByText('Salir')).toBeInTheDocument();
  });
});