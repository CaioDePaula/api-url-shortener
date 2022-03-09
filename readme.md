
# Desafio - Back-End (Brasil)

Resolvi desenvolver uma api em NodeJs, que tem a tarefa de encurtar urls. Esse foi um desafio proposto pela comunidade [Back-End Brasil](https://github.com/backend-br/desafios)


## Roadmap

- define use cases
- exist register shortener
- lifecycle register
- data structure


## Use cases

- redirect to url of shortener


## Data structure

- Post response
```json
{
  new_url: str  
}
```

- Database
```json
{
  id: str,
  url: str,
  shortener_url: str,
  'visualizations': int,
  created_at: datetime,
  deleted: bool
}
```



## API Reference

#### Create url shortener

```http
  POST /api/v1/shortener/${url}/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `str` | **Required**. url to cut |


#### Get specific url shortener

```http
  GET /api/v1/shortener/${url}/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `url`      | `str` | **Required**. short url |



## Usage/Examples

- Method Post
```javascript
var settings = {
  "url": "localhost:3000/api/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  "data": {
    "url": "https://backendbrasil.com.br"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```

- Response
```javascript
{
  "new_url": "fl9Nf5q"
}
```

- Method Get
```javascript
var settings = {
  "url": "localhost:3000/api/fl9Nf5q",
  "method": "GET",
  "timeout": 0,
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
```


## Run Locally

Clone the project

```bash
  git clone this project
```

Go to the project directory

```bash
  cd this project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** Html, CSS, JS

**Server:** Node, Express, SQLite

## Authors

- [CaioDePaula](https://www.github.com/CaioDePaula)
