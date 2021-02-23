# cloudApps-node-ecommerce-hexagonal

## Install dependencies

```
$ npm install
```

## Run tests

Is mandatory to install dependencies previously

```
$ npm test
```

## Run application

Before run the application is mandatory to install dependencies previously and also is needed to has a available mongoDB database, the most easy way is with [docker](https://www.docker.com/) executing the provided [start-mongodb-container.sh](start-mongodb-container.sh) script with the command:

```
$ ./start-mongodb-container.sh
```

After cover these previous steps, the application can be executed:

```
$ npm start
```

## Testing

You can find a file named [Practice1-ecommerce-node.postman_collection.json](Practice1-ecommerce-node.postman_collection.json) that you can import in [Postman](https://www.postman.com/), to test the implemented endpoints.

## Author

[David Rojo(@david-rojo)](https://github.com/david-rojo)
