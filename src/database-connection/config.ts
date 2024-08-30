import { connect } from "mongoose";

const URI: string = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/`;
const connection = () => {
  connect(URI)
    .then(() =>
      console.log(`Connection Successfully at ${process.env.DB_HOST}`)
    )
    .catch((err) => console.log("faild to connect to db" + err));
};

export default connection;
