module.exports = {
  DB: 'mongodb://vod.mn.com.vn:27017/todos',
  APP_PORT: 4000,
  DB_CONFIG: {
    "db": { "native_parser": true },
    "server": { "poolSize": 5 },
    "user": "dbadmin",
    "pass": "123456789",
    "auth":{"authdb":"admin"}
  }
}
