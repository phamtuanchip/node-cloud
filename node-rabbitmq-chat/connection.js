var join = require('path').join
var rfs = require('fs').readFileSync
var amqp = require('amqplib/callback_api')

// var option = {
//   cert: rfs(join(__dirname, '../certs/server.crt')),
//   key: rfs(join(__dirname, '../certs/server.key')),
//   passphrase: 'ThePassphraseForYourKey',
//   ca: [rfs(join(__dirname, '../certs/compose.crt'))]
// }
opts = {}

// amqp.connect('amqp://mszsagby:FYpHZnrI89y3W7b-oOYGVXTl4XXYXiIc@mustang.rmq.cloudamqp.com/mszsagby',
// opts, function(err, conn) {
//     if (err) {
//       throw new Error(err)
//     }

//     console.log(conn)
//     conn.close()
// })

module.exports = function(cb) {
  amqp.connect('amqp://mszsagby:FYpHZnrI89y3W7b-oOYGVXTl4XXYXiIc@mustang.rmq.cloudamqp.com/mszsagby',
  opts, function(err, conn) {
    if (err) {
      throw new Error(err)
    }

    cb(conn)
  })
}