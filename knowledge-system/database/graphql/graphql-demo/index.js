// Import the required libraries
var graphql     = require('graphql'),
    graphqlHTTP = require('express-graphql'),
    express     = require('express');

// Import the data you created above
var data = require('./data.json');

// Define the User type with two string fields: `id` and `name`.
// The type of User is GraphQLObjectType, which has child fields
// with their own types (in this case, GraphQLString)
var userType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type:graphql.GraphQLString }
    }
})

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `User` field, however, is a userType, which we defined above.
var schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                // `args` describes the arguments that `user` query accepts
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                // The resolve function describes how to "resolve" or fulfill
                // the incoming query
                // In this case we use the `id` argument from above as a key
                // to get the User from `data`
                resolve: function(_, args) {
                    return data[args.id];
                }
            }
        }
    })
})

express()
    .use('/graphql', graphqlHTTP({ schema: schema, pretty: true }))
    .listen(3000);

console.log('GrapgQL server running on http://localhost:3000/graphql');