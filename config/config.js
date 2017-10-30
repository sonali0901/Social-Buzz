const path = require("path");
const rootPath = path.normalize(__dirname + "/..");
const DB = process.env.DB;
const clientID = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

module.exports = {
  development: {
    db: "mongodb://localhost/ntwitter",
    root: rootPath,
    app: {
      name: "Node Twitter"
    },
    github: {
      clientID: "440bdd35de0814897c1d",
      clientSecret: "df7247a4b9fab74040ec1881416d6d1c24d873b7",
      callbackURL: "http://localhost:3000/auth/github/callback"
    }
  },
  test: {
    db: "mongodb://root:volvo76@ds039078.mongolab.com:39078/ntwitter",
    root: rootPath,
    app: {
      name: "Nodejs Express Mongoose "
    },
    github: {
      clientID: "440bdd35de0814897c1d",
      clientSecret: "df7247a4b9fab74040ec1881416d6d1c24d873b7",
      callbackURL: "http://localhost:3000/auth/github/callback"
    }
  },
  production: {
    db: DB,
    root: rootPath,
    app: {
      name: "Nodejs Express Mongoose Demo"
    },
    github: {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "http://nitter.herokuapp.com/auth/github/callback"
    }
  }
};
