## Copa dos Filmes

[https://alalbux.github.io/CopaFilmes/](https://alalbux.github.io/CopaFilmes/)

![homepage](https://github.com/alalbux/CopaFilmes/blob/master/homepage.png)

## Frontend

#### Browsers support

| ![](https://www.w3schools.com/images/compatible_chrome.gif)<br>Chrome | ![](https://www.w3schools.com/images/compatible_firefox.gif)<br>Firefox | ![](https://www.w3schools.com/images/compatible_edge.gif)<br>Edge |
| :-------------------------------------------------------------------: | :---------------------------------------------------------------------: | :---------------------------------------------------------------: |
|                                  57+                                  |                                   52+                                   |                                16+                                |

#### Run the project locally

**1 -** Clone the project and install the dependencies:

```
$ git clone https://github.com/alalbux/CopaFilmes.git
$ cd CopaFilmes/frontend/
$ npm install
```

**2 -** Run static server and livereload:
[http://localhost:8080](http://localhost:8080)

```
$ npm run start
```

#### Automatic Tasks

- `$ npm run start` Watch the files to build and start a static server.
- `$ npm run test` Watch the files to testing.
- `$ npm run build` Compile, concat and minify all files.
- `$ npm run deploy` Compile, concat, minify deploy all files.


#### Stack
- [React](https://github.com/facebook/react)
- [Create React App](https://github.com/facebook/create-react-app)
- [Styled-components](https://www.styled-components.com/)


#### License

[CopaFilmes]() is [MIT](LICENSE) licensed.


## API

Deployed endpoint: [https://filmschampions20200402090325.azurewebsites.net/](https://filmschampions20200402090325.azurewebsites.net/)


#### Lista de Filmes [GET]
Deployed endpoint: [https://filmschampions20200402090325.azurewebsites.net/Movies](https://filmschampions20200402090325.azurewebsites.net/Movies)

```shell
curl --location --request GET 'https://filmschampions20200402090325.azurewebsites.net/Movies'
```

```json
[
    {
        "id": "tt3606756",
        "titulo": "Os Incríveis 2",
        "ano": 2018,
        "nota": 8.5
    },
    {
        "id": "tt4881806",
        "titulo": "Jurassic World: Reino Ameaçado",
        "ano": 2018,
        "nota": 6.7
    },
    {
        "id": "tt5164214",
        "titulo": "Oito Mulheres e um Segredo",
        "ano": 2018,
        "nota": 6.3
    },
    {
        "id": "tt7784604",
        "titulo": "Hereditário",
        "ano": 2018,
        "nota": 7.8
    },
    {
        "id": "tt4154756",
        "titulo": "Vingadores: Guerra Infinita",
        "ano": 2018,
        "nota": 8.8
    },
    {
        "id": "tt5463162",
        "titulo": "Deadpool 2",
        "ano": 2018,
        "nota": 8.1
    },
    {
        "id": "tt3778644",
        "titulo": "Han Solo: Uma História Star Wars",
        "ano": 2018,
        "nota": 7.2
    },
    {
        "id": "tt3501632",
        "titulo": "Thor: Ragnarok",
        "ano": 2017,
        "nota": 7.9
    },
    {
        "id": "tt2854926",
        "titulo": "Te Peguei!",
        "ano": 2018,
        "nota": 7.1
    },
    {
        "id": "tt0317705",
        "titulo": "Os Incríveis",
        "ano": 2004,
        "nota": 8
    },
    {
        "id": "tt3799232",
        "titulo": "A Barraca do Beijo",
        "ano": 2018,
        "nota": 6.4
    },
    {
        "id": "tt1365519",
        "titulo": "Tomb Raider: A Origem",
        "ano": 2018,
        "nota": 6.5
    },
    {
        "id": "tt1825683",
        "titulo": "Pantera Negra",
        "ano": 2018,
        "nota": 7.5
    },
    {
        "id": "tt5834262",
        "titulo": "Hotel Artemis",
        "ano": 2018,
        "nota": 6.3
    },
    {
        "id": "tt7690670",
        "titulo": "Superfly",
        "ano": 2018,
        "nota": 5.1
    },
    {
        "id": "tt6499752",
        "titulo": "Upgrade",
        "ano": 2018,
        "nota": 7.8
    }
]
```



#### Campeonato [POST]

Deployed endpoint: [https://filmschampions20200402090325.azurewebsites.net/Championship](https://filmschampions20200402090325.azurewebsites.net/Championship)


```shell
curl --location --request POST 'https://filmschampions20200402090325.azurewebsites.net/Championship' \
--header 'Content-Type: application/json' \
--header 'Cookie: ARRAffinity=fce2c59d05405d82af3c53ff9cfe52fff3730f1e06699e9ff5879b58bec61369' \
--data-raw '[
	{"id":"tt3606756","titulo":"Os Incríveis 2","ano":2018,"nota":8.5},
	{"id":"tt4881806","titulo":"Jurassic World: Reino Ameaçado","ano":2018,"nota":6.7},
	{"id":"tt5164214","titulo":"Oito Mulheres e um Segredo","ano":2018,"nota":6.3},
	{"id":"tt7784604","titulo":"Hereditário","ano":2018,"nota":7.8},
	{"id":"tt4154756","titulo":"Vingadores: Guerra Infinita","ano":2018,"nota":8.8},
	{"id":"tt5463162","titulo":"Deadpool 2","ano":2018,"nota":8.1},
	{"id":"tt3778644","titulo":"Han Solo: Uma História Star Wars","ano":2018,"nota":7.2},
	{"id":"tt3501632","titulo":"Thor: Ragnarok","ano":2017,"nota":7.9}
]'
```


```json
[
    {
        "id": "tt4154756",
        "titulo": "Vingadores: Guerra Infinita",
        "ano": 2018,
        "nota": 8.8
    },
    {
        "id": "tt3606756",
        "titulo": "Os Incríveis 2",
        "ano": 2018,
        "nota": 8.5
    }
]
```