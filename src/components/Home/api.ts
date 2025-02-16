// api.ts
export const apiBaseUrl = "https://supermarketapp25.pythonanywhere.com/";
// Função para cadastrar um usuário
export const cadastrarUsuario = async (
  nome: string,
  telefone: string,
  email: string
) => {
  const response = await fetch(`${apiBaseUrl}api/users`, {
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
  const response = await fetch(`${apiBaseUrl}api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, telefone }),
  });
  return response;
};
