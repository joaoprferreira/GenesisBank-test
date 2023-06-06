# Genesis Bank - challenge

## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- Node.js
- MySQL

## Configuração

1. Clone o repositório:

   ```bash
   git clone [https://github.com/seu-usuario/seu-projeto.git](https://github.com/joaoprferreira/GenesisBank-test)


   ```

### Instale as dependências do projeto:

```bash
  npm install ou yarn
```

### Configure o banco de dados MySQL:

Crie um banco de dados no MySQL.

Copie o arquivo .env.example para .env:

```bash
  cp .env.example .env
```

### Abra o arquivo .env e preencha as informações de conexão com o banco de dados:

```bash
NEXT_PUBLIC_URL=sua api
NEXT_PUBLIC_DB_HOST=seu-host
NEXT_PUBLIC_DB_USER=seu-usuario
NEXT_PUBLIC_DB_PASSWORD=sua-senha
NEXT_PUBLIC_DB_DATABASE=seu-banco-de-dados
```

Execute as migrações do banco de dados:

```
npm run migrate
```

### Exeute a query de criação das tabelas:

```src/database.db


CREATE DATABASE ecommerce;

use ecommerce;

CREATE TABLE
    IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTO_INCREMENT UNIQUE,
        name VARCHAR(100) NOT NULL,
        description VARCHAR(100) NOT NULL,
        price VARCHAR(50) NOT NULL,
        image TEXT NOT NULL,
        category VARCHAR(45) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS shopping_cart(
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        product_id INT,
        amount INTEGER,
        total DECIMAL(10, 2),
        FOREIGN KEY (product_id) REFERENCES products(id)
    )
```

Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```
npm run dev
```

O projeto estará disponível em http://localhost:3000.

- Techs
  - NextJS - Typescript
  - Context-Api
  - Chakra UI
  - Formik
  - MySql
