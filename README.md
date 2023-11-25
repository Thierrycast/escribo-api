<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=6f20a1&height=120&section=header"/>


# Escribo API

O projeto Escribo API é uma API de autenticação de usuários desenvolvida em TypeScript com o framework Express. O objetivo principal é fornecer funcionalidades como sign in, sign up e get user.

## Acesso ao Deploy 🚀

Acesse o deploy da aplicação [https://escribo-api-ip6s.onrender.com/](https://escribo-api-ip6s.onrender.com/).

- Aviso de Tempo de Resposta ⏳

Esta aplicação está hospedada na Render. Na primeira requisição, pode haver um atraso devido à possível inatividade do servidor.

## Tecnologias Utilizadas
- NodeJS v18.0.0
- Express v4.18.2
- TypeScript v5.3.2
- EsLint
- Gulp
- Prisma
- JSON Web Token (jsonwebtoken)

## Requisitos
- NodeJS v18.0.0 instalado
- MongoDB configurado
- NPM para gerenciamento de dependências

## Instalação
1. Clone o repositório: `git clone https://github.com/seu-usuario/escribo-api.git`
2. Instale as dependências: `npm install`
3. Execute o servidor em modo de desenvolvimento: `npm run dev`

## Scripts
- `npm run dev`: Inicia o servidor em modo de desenvolvimento usando Nodemon.
- `npm run build`: Realiza a compilação do projeto usando Gulp.
- `npm start`: Inicia o servidor a partir dos arquivos compilados.
- `npm run lint`: Executa o EsLint para análise de código.
- `npm run prisma:generate`: Gera os artefatos do Prisma.
- `npm run commit`: Inicia o Commitizen para facilitar commits padronizados.

## Uso da API
### Cadastro de Usuário (/sign-up)
- **Método:** POST
- **URL:** `https://escribo-api-ip6s.onrender.com/usuario`
- **Requisição (application/json):**
  ```json
  {
    "nome": "Nome do Usuário",
    "email": "usuario@email.com",
    "senha": "senha123",
    "telefones": [
      {
        "numero": "123456789",
        "ddd": "11"
      }
    ]
  }

### Response:

- Status 201 CREATED:
```json
{
  "id": "id",
  "name": "Nome do Usuário",
  "data_criacao": "2023-11-22T14:38:34.911Z",
  "data_atualizacao": "2023-11-22T14:38:34.911Z",
  "ultimo_login": "2023-11-22T14:38:34.700Z",
  "token": "JWT"
}
```

### Erros Possíveis:

- Status 401 - Unauthorized: Usuário e/ou senha incorretos
  
### Autenticação (/sign-in)
- Método: POST
- URL: `https://escribo-api-ip6s.onrender.com/login`
- Requisição (application/json):
json
```
{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

### Response:
- Status 200 OK:
```json
{
  "id": "GUID/ID",
  "name": "Nome do Usuário",
  "data_criacao": "2023-11-22T14:38:34.911Z",
  "data_atualizacao": "2023-11-22T14:38:34.911Z",
  "ultimo_login": "2023-11-22T14:45:34.700Z",
  "token": "GUID/JWT"
}
```

### Erros Possíveis:
- Status 409 - Conflict: Tentativa de cadastro com um email já existente
  
### Busca de Usuário (/user)
- Método: GET
- URL: `https://escribo-api-ip6s.onrender.com/usuario`
 -Requisição (HEADER):
```  
json
{
  "Authentication": "Bearer {token}"
}
```  
### Response:
- Status 200 OK:
```
json
{
  "id": "GUID/ID",
  "name": "Nome do Usuário",
  "data_criacao": "2023-11-22T14:38:34.911Z",
  "data_atualizacao": "2023-11-22T14:38:34.911Z",
  "ultimo_login": "2023-11-22T14:45:34.700Z"
}
```

### Erros Possíveis:
- Status 401 - Unauthorized: Token inválido
- Status 401 - Unauthorized (Sessão inválida): O token expirou

  
<img width=100% src="https://capsule-render.vercel.app/api?type=waving&color=6f20a1&height=120&section=footer"/>

