import { Client } from "pg";

const URI = `postgresql://user:password@postgres:5432`;
const client = new Client({
  connectionString: URI,
});
const postgreConnection = () => {
  client
    .connect()
    .then(() => console.log("connected to  postgres db..."))
    .catch((err) => console.log("failed to connect to postgres db: ", err));
};

export default postgreConnection;
