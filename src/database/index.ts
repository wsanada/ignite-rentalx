import { createConnection, getConnectionOptions } from "typeorm";

// import "reflect-metadata"
// import { createConnection } from "typeorm"
// (async () => await createConnection())()

interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'db'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
    createConnection({
        ...options,
    });
});