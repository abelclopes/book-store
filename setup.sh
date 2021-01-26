#!/bin/bash
set -e

cd client-app/
pwd
npm i && npm start
cd ../Service/

pwd
cd Service/
dotnet restore
dotnet build
cd scr/Api/
dotnet ef database update

dotnet run
