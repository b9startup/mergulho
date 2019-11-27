## Utilização

- Instale as dependencias utilizando 'yarn' ou 'npm install'.
- O banco de dados padrão é o Postgres, mas pode ser alterado (sendo necessário instalar o devido adaptador). Crie um banco de dados com o nome que desejar.
- Faça uma cópia do arquivo .env.example, renomeie para .env, e preencha as informações de banco de dados e chave secreta do JSON Web Token.
- Execute o comando 'yarn migrate' ou 'npm run migrate' para gerar as tabelas no banco de dados.
- Caso queira desfazer as migrations, execute o comando 'yarn undomigrate' ou 'npm run undomigrate'.
- Execute o comando 'yarn dev' ou 'npm run dev' para executar o servidor de desenvolvimento.
