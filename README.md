## Előfeltételek:

#### MySQL

1. telepíts *MySQL*-t és indítsd el
1. készítsd el az adatbázist, táblákat és példaadatokat a `/db/init.sql` fájl segítségével*

***Hasznos infó**: szükség esetén több részletbe szedve add ki a MySQL parancsokat.

#### NodeJS

1. telepíts *NodeJs*-t és *npm*-et
1. telepítsd a megadott csomagokat
    ```
    cd api
    npm install package.json
    cd ..
    ```
## Indítás

1. vedd fel a következő környezeti változókat
    ```
    export MYSQL_API_USER=user
    export MYSQL_API_PASSWORD=password
    export MYSQL_API_HOST=localhost
    ```
1. indítsd el az alkalmazást
   ```
   node api/src/app.js
   ```
