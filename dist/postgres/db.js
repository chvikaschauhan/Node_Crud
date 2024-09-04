import pg from "pg";
const connetionString = { host: 'host.docker.internal', port: 5433, database: 'postgres', user: 'postgres', password: '8755', sslmode: 'prefer', connect_timeout: 10 };
async function ConnectToDb(connectString) {
    const pool = new pg.Pool(connectString);
    const client = pool.connect();
    return client;
}
var client = await ConnectToDb(connetionString);
export default client;
// // import pkg from "pg";
// // const connetionString = {host:'host.docker.internal', port:5433, dbname:'postgres', user:'postgres', password:'8755', sslmode:'prefer', connect_timeout:10}
// // const client = new pkg.Client(connetionString)
// await client.connect()
// console.log("Client---", client)
// export default client
//# sourceMappingURL=db.js.map