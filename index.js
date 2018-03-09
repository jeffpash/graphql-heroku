const express = require('express')
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')

app.use(cors());

const { Person } = require('./server/model')
const schema = require('./server/schema')
const resolvers = require('./server/resolvers');

mongoose.connect(
  process.env.DATABASE_URL,
 (err) => {
  if(err) {
    return console.log(err)
  }

  console.log('mongoose OK');
});

const execSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

app.use('/graphql', express.json(), graphqlExpress({ schema: execSchema, context: { Person }}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql'}))

app.listen(3000, (err) => {
  if(err) {
    console.log('err : ', err);
  }
  console.log('connected');
})
