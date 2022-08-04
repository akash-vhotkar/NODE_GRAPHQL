const { graphqlHTTP } = require('express-graphql');
const { buildSchema, GraphQLInt, GraphQLString, GraphQLSchema, GraphQLObjectType } = require('graphql');




module.exports = (app) => {

    // Construct a schema, using GraphQL schema language
    var schema = buildSchema(`
    enum  allowedValues  {
        RED,
        GREEN,
        BLUE 
    }
        input userdata{
            name :String!,
            address :String!
        }
        type name {
            name :String!
        }
        type Query {
            hello: String,
            getusers :[String],
        }
        type Mutation {
            createUsers(content: userdata): name   
        }
    `);

    // The root provides a resolver function for each API endpoint
    var root = {
        hello: () => {
            return 'Hello world!';
        },
        getusers: () => {
            return ["akash"];
        },
        createUsers: ({ content }) => {
            console.log("the arguments that server is recieved == ", content.name);
            return { name: content.name };
        }
    };
    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true

    }))
}
