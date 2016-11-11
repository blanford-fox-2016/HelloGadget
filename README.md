# HelloGadget

## Node Package Module Server

### Install express

```
npm install express-generator -g
express -e
npm install
```

### Install Mongodb and Mongoose

```
npm install mongodb --save
npm install mongoose --save
```

### Install Cors

```
npm install cors --save 
```

### Install express-session

```
npm install express-session --save
```

### Install passport, passport local, and passport local mongoose

```
npm install passport --save
npm install passport-local --save
npm install passport-local-mongoose --save
```

### Install dotenv

```
npm install dotenv --save
```

### Install mocha

```
npm install mocha -g
```

### Install chai and chai-http

```
npm install chai --save
npm install chai-http --save
```


## Routing

### API Smartphone

| Endpoint              | HTTP      | Description                       |
| ----------            | -----     | ------------                      |
| api/smartphones/seed  | GET       | Create dummy smartphones data     |
| api/smartphones       | GET       | Get all smartphones               |
| api/smartphones/:name | GET       | Get smartphone by name            |
| api/smartphones       | DELETE    | Delete all smartphones            |
| api/smartphones/:id   | DELETE    | Delete smartphones by id          |
| api/smartphones/:id   | PUT       | Update smartphones by id          |


## Client

### Install bower

```
npm install bower -g
bower init
```

### Make bowerrc

```
{
    "directory": "lib/"
}
```

### Install bootstrap

```
bower install bootstrap --save
```