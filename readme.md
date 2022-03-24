# Summary

Basic idea behind this unfinished setup is to run the sushibar 
as a web application.

In the finished app the user can enter number of tables to create
tables to seat the customers.

An input allows to set the number of new guests to seat.
An API call would check for available seats and occupie the seats.

Interface would update the seats on the table accordingly.


# Setup

##  Installation


```js
npm install
npm install --prefix frontend
npm install --prefix express

// create the .env
cp $PWD/express/.env.dist $PWD/express/.env

// create simlink from vue to the express app
ln -sF $PWD/frontend/dist $PWD/express/views

```

## Build & run

```js
npm run build --prefix frontend && node ./express/app.js 
```

## Open in Browser

http://localhost:8080/

# Todo

> a lot of work to do

* persistance of data via localStorage, cookies, etc.
* support multiple tables
* support adding and removing seats from the tables
* socket or more API calls to let the frontend know when a group leaves
  * depending on groups size, an info could be displayed when a group likely leaves (estimated waiting time)
* tests
* monitoring / logging
