# 📋 API de Usuários com Express

Uma API REST simples construída com **Node.js** e **Express** para gerenciamento de usuários.

---

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
node index.js
```

O servidor estará rodando em `http://localhost:3000`.

---

## 🛣️ Rotas

### Criar usuários

**Body (JSON):**

```json
{
  "nome": "João Silva",
  "email": "joao@email.com"
}
```

**Resposta:** `201 Created` com os dados do usuário criado.

---

### Listar usuários
