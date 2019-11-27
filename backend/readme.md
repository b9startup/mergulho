## Api projeto b9 Startup

<h3>Para executar essa api, clone esse repositorio e execute os seguintes passos:</h3>

<span>Instale as dependencias</span>

<span>Usando yarn</span>

```js
    yarn
```

<span>usando npm</span>

```js
    npm install
```


<span>No projeto foi usado o banco de dados Postgresql, então crie uma instancia local do banco de dados</span>

<h3>Apos instalado as dependencias configure as variaveis locais</h3>
<span>Crie na raiz um arquivo chamado ".env" seguindo o exemplo do que esta criado lá  ".envExemple" e preencha com os dados de conexão do banco de dados, e com a chave md5 para gerar o token de segurança para login</span>


<h3>Apos tudo configurado podemos rodar o servidor, com os seguintes comandos</h3>

<span>usando yarn</span>

```js
    yarn dev
```

<span>usando npm</span>

```js
    npm dev
```


<h3>Essa api contem 2 rotas, sendo uma para criar o login, e outra para fazer o login, e esta configurada para rodar na porta 3333, segue as rotas:</h3>

<span>"/signup" <- Rota de criação de conta, recebe email, name e pass</span>

<span>"/signin" <- Rota de Login, recebe email e pass e retorna o token de authenticação</span>





