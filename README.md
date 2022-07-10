# ignite-rentx
Projeto de estudo de NodeJS

## TypeORM Migrations
Para criar migrations é possível fazer do terminal local de desenvolvimento:
  
    yarn typeorm migration:create -n CreateCategory

A classe deve ser criada dentro da pastas __'./src/database/migrations/'__


Executar migrations dentro do container do app:

    docker exec -it rentx-app /bin/bash
    yarn typeorm migration:run