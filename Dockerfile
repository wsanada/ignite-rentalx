FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install 

COPY . . /usr/app/

EXPOSE 3333

CMD [ "npm", "run", "dev" ]

#// cria um container
#docker build -t rentx-app .

#// inicia um container
#docker run -p 3333:3333 rentx-app

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

#/* pega o ip do container */
#docker inspect --format='{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' rentx-app

#/* outra forma de ver o ip */
#docker exec rentx-app cat /etc/hosts