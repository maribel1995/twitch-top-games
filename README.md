# react-twitch-tv

## Requisitos

- Node v12+

## Instruções para rodar localmente

- Criar uma conta na twitch.tv
- [Gerar o Access Token aqui!](https://twitchtokengenerator.com/)

  - precisa estar logado na [Twitch.tv](https://www.twitch.tv/)
  - na parte de **Available Token Scopes**, depois da lista, clique em **Generate Token**
  - o token estará na parte de **Generated Tokens**
  - você precisará do `ACCESS TOKEN` e do `CLIENT ID`

  ## Comandos

- `npm install` - instalação dos módulos
- `npm start -- --env.TOKEN=<YOUR_TOKEN> --env.CLIENT_ID=<YOUR_CLIENT_ID> --env.TWITCH_URL=https://api.twitch.tv/helix/` - rodar local
- `npm build` - buildar o projeto
- `npm test` - rodar os testes
