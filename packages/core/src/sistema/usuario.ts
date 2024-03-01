import type { Usuario } from "./tipos";

export function CriarNovoUsuarioNormal(nome: string, email: string): Usuario {
  if (!nome?.trim()) {
    throw new Error("O nome do usuário é obrigatorio!");
  }
  if (!email?.trim()) {
    throw new Error("O nome do usuário é obrigatorio!");
  }
  // TODO validar se eh um email valido

  return {
    nome: nome.trim().toUpperCase(),
    // nome,
    email,
    admin: false,
  };
}

export function CriarNovoUsuarioAdministrador(
  nome: string,
  email: string
): Usuario {
  return {
    ...CriarNovoUsuarioNormal(nome, email),
    admin: true,
  };
}
