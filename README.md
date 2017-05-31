# Todo app

#### Used:
- [nest](https://github.com/kamilmysliwiec/nest) as Node.js framework
- [swaddle](https://github.com/danielstjules/swaddle) for http requests
- [YaaS services](https://yaas.io) for data persistence

### Installation

```bash
yarn
```

### Configuration

To run project you need __YaaS__ client subscribed to __Document__ package.

You can configure project by environment variables. You can define these in the file `.env` (based on `.env.example`).

|name|required|
|----|:--------:|
|APP_PORT|false|
|YAAS_TENANT|true|
|YAAS_CLIENT|true|
|YAAS_CLIENT_ID|true|
|YAAS_CLIENT_SECRET|true|

### Run

```bash
npm start
```
or for development (with hot reload):
```bash
npm run develop
```
