// api.ts
export const apiBaseUrl = "http://127.0.0.1:5000/api";

// Função para cadastrar um usuário
export const cadastrarUsuario = async (
  nome: string,
  telefone: string,
  email: string
) => {
  const response = await fetch(`${apiBaseUrl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, telefone, email }),
  });
  return response;
};

// Função para autenticar um usuário
export const autenticarUsuario = async (nome: string, telefone: string) => {
  const response = await fetch(`${apiBaseUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, telefone }),
  });
  return response;
};