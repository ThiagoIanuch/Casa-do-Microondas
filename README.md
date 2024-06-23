# Sobre o Projeto

Casa do Microondas é um projeto de um site para uma assistência de microondas, desenvolvido para a disciplina de Desenvolvimento Web e Banco de Dados, no 3º período de Ciência da Computação na Uniandrade

<img src="https://i.imgur.com/4t7H77S.png">

## Construido com

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Pré-requisitos

- IDE (recomendado o Visual Studio Code)
- Ferramenta para gerenciamento de banco de dados MySQL (recomendado o MySQL Workbench)
- Ultima versão do Node.js:
```
    https://nodejs.org/en/download
```

## Instalando

1. Clone o repositório
```
    git clone https://github.com/ThiagoIanuch/Casa-do-Microondas.git
```

2. Abra dois terminais no Visual Studio ou na IDE que está utilizando, um para o cliente e outro para o servidor, em um acesse a pasta client e no outro a pasta server e baixe os pacotes npm
- No terminal do cliente:
```
    cd client
    npm install
```
- No terminal do servidor:
```
    cd server
    npm install
```
3. No Workbench ou na ferramenta que está usando para gerenciar o banco de dados MySQL importe os scripts SQL que estão na pasta server/src/models (create.sql, insert.sql e procedures.sql)

4. Crie um arquivo .env na pasta server com as informações do banco de dados criado em sua máquina e com um segredo para o token JWT, exemplo:
```
    JWT_SECRET = casa-do-microondas
    
    HOST = localhost
    USER = root
    PASSWORD = admin
    DATABASE = casamicroondas
```

## Utilização
1. Verifique em ambos os terminais se está dentro das pastas corretas (client e server) e digite o seguinte comando para iniciar o projeto:
- No terminal do cliente:
```
    npm run dev
```
- No terminal do servidor
```
    npm start
```

2. Acesse o site no navegador
```
    localhost:5173 (cliente)
    localhost:8080 (servidor)
```
- O banco de dados possui por padrão duas contas já cadastradas para realizar testes, uma de cliente e outra com permissão de administrador:
    - email: `clienteteste@gmail.com` | senha: clienteteste 
    - email: `admin@casamicroondas.com` | senha: cmoadmin*


## Contribuidores
<a href="https://github.com/ThiagoIanuch"><img src="https://github.com/ThiagoIanuch.png" width="150px"></a> <a href="https://github.com/Henrique-Barbieri"><img src="https://github.com/Henrique-Barbieri.png" width="150px"></a> <a href="https://github.com/GabrielDBarbieri"><img src="https://github.com/GabrielDBarbieri.png" width="150px"></a> <a href="https://github.com/le-leodasilva"><img src="https://github.com/le-leodasilva.png" width="150px"></a>
