const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb://tyler:test123@ds353957.mlab.com:53957/graph-tutorial', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mlab')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen('5001', () => console.log('App running on 5001'));
