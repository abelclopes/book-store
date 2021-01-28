
## configurar database docker
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Atec@Password!' -p 1401:1433 -d --name=db_book_sql microsoft/mssql-server-linux:2017-latest
## testando conecção com database
docker exec -it db_book_sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Atec@Password!'

## CLIENTE REACT
resolvido versao do cliente react no monolito que estava com problema de build, mantido o cliente cliente separado, mas vai ser descontinuado

## RUN APP
cd Service/src/Api/ ClienteApp/ &&  npm i


## Build e restore
```
cd Service/src
dotnet restore
dotnet build

```

## migrations

```

cd Service/src/Api/ 

dotnet-ef migrations add InitialCreate --output-dir migrations
```
## atualizar database

```
dotnet ef database update
```

## Rodar sistema

```
cd Service/src/api
dotnet run
https://localhost:5001

```


### Swagger
```
https://localhost:5001/swagger/

```

### login  

```
/api/v1/Authentication/login

{
  "username": "admin@gmail.com",
  "password": "teste123"
}

```


### implements moq xunit test

https://github.com/Moq/moq4/wiki/Quickstart