
## configurar database docker
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Atec@Password!' -p 1401:1433 -d --name=db_book_sql microsoft/mssql-server-linux:2017-latest
## testando conecção com database
docker exec -it db_book_sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Atec@Password!'

## CLIENTE REACT
versao do cliente react no monolito esta com problema de build

## RUN APP
cd cliente-app/ &&  npm i && npm run start


## Build e restore
``
cd Service/src
dotnet restore
dotnet build

cd Api/ 
``

## migrations

``
dotnet-ef migrations add InitialCreate --output-dir migrations
``
## atualizar database

``
dotnet ef database update
``

## Rodar api


## Rodar api

``
cd Service/src/api
dotnet run
https://localhost:5001/swagger
``

### login 
``
/api/v1/Authentication/login

{
  "username": "admin@gmail.com",
  "password": "teste123"
}

``

