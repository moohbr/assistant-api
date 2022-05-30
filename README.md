
# Assistant-API

Backend API to serve applications that consume IBM Watson Assistant, using SOLID standards.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV` = **dev** or **production**

`VCAP_PORT`= Provided by IBM Cloud Cloud Foundry Host

`VCAP_HOST` = Provided by IBM Cloud Cloud Foundry Host

`WATSON_ASSISTANT_API_KEY`= Provided by Assistant Team

`WATSON_ASSISTANT_AUTH_TYPE`= Provided by Assistant Team

`WATSON_ASSISTANT_IAM_API_KEY`= Provided by Assistant Team

`WATSON_ASSISTANT_URL`= Provided by Assistant Team

`WATSON_ASSISTANT_VERSION`= Provided by Assistant Team

`WATSON_ASSISTANT_WORKSPACE_ID` = Provided by Assistant Team

`DEBUG`= **true** or **false**

`VCAP_SERVICES`= Provided by IBM Cloud Cloud Foundry Integration
## Run Locally

Clone the project

```bash
  git clone https://github.com/moohbr/assistant-api
```

Go to the project directory

```bash
  cd assistant-api
```

Install dependencies

```bash
  yarn install
```
Build the project

```bash
  yarn build
```
Start the server

```bash
  yarn start
```


## API Reference

#### Start a new conversation

```http
  GET /conversation
```

#### Send a message

```http
  POST /conversation
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Required**. Conversation session id |
| `message`      | `string` | The input text. |



## Authors

- [@moohbr](https://www.github.com/moohbr)

