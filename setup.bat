docker run -d -p 1433:1433 -e 'sa_password=Atec@Password!' -e ACCEPT_EULA=Y --name=db_book_sql microsoft/mssql-server-linux:2017-latest

# docker exec -it db_book_sql /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P 'Atec@Password!'