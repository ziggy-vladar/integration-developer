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

## Teszt
Segítségül itt vannak teszt hívások
```
curl "http://localhost:3000/genres"
curl "http://localhost:3000/artists"
curl "http://localhost:3000/albums?artistName=Pink%20Floyd"
curl "http://localhost:3000/artists?genreName=rock"
curl -X POST "http://localhost:3000/albums" -d '{
    "AlbumName":"test",
    "DateReleased":"2024-01-01",
    "ArtistId":11,
    "GenreId":7}' -H 'Content-Type: application/json'
```