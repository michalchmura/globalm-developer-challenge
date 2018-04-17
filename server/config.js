import Mongoose from 'mongoose';

const config = {
  port: 8000,
  mongo_uri: 'mongodb://localhost/global-m-challenge'
};

async function db_connect(mongo_uri) {
  await new Promise((resolve, reject) => {
    Mongoose.connection
        .on('error', error => reject(error))
        .on('close', () => console.log('Database connection closed.'))
        .once('open', () => resolve(Mongoose.connections[0]));
    Mongoose.connect(mongo_uri, { useMongoClient: true } );
  });
}

export default { config, db_connect };