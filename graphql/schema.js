const schema = `
    type User {
        firstName :String!,
        lastName :String!,
        mobile :String!,
        address :String!
    }
    type Query {
        getUsers : String
    }
    type Mutation {
        
    }
`;


module.exports = { schema };
