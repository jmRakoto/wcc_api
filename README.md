# An api to make toys exchange

## Before test make sure you have mongodb installed

    - go to .env file and change DB_HOST with your mongodb host url

## Run the following command

    - npm install
    - npm start

## EndPoint list

### To create new exchange

    - method: POST
    - endPoint: http://localhost:3000/api/exchange/
    - payload:
        . ownerName: text
        . phone: text
        . toysName: text
        . image: file
        . exchangeWith: text

### To get all available exchange with 10 items per page

    - method: GET
    - endPoint: http://localhost:3000/api/exchange/
    - params:
        . page: page number
    - ex:http://localhost:3000/api/exchange/?page=1

### To desactivate exchange by id

    - method: PUT
    - endPoint: http://localhost:3000/api/exchange/:id
    - params:
        . id: exchange id
    - ex:http://localhost:3000/api/exchange/631d1df6dcfa30b9745d6e83
