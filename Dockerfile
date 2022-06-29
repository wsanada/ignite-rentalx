FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm i 

COPY . . /usr/app/

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

#// cria um container
#docker build -t rentx .

#// inicia um container
#docker run -p 3333:3333 rentx

#// entra em um container - [ctrl][d] pra sair
#docker exec -t <nome-container> /bin/bash

#// lista os containers ativos/rodando
#docker ps 

#// lista todos os containers
#docker ps -a

#// para um container ativo/rodando
#docker stop <id-do-container>

#// remove um container
#docker rm <id-do-container>

#// imprime os últimos logs do container na tela
#docker logs <nome-do-container>

#// imprime os últimos logs do container na tela e fica experando mais
#docker logs <nome-do-container> -f