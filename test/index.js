require('../')
var dgram = require('dgram')
var test = require('tape')
var net = require('net')

test('overload socket', function (t) {
  var a = dgram.createSocket('udp4')
  var b = dgram.createSocket('udp4')
  a.bind(function (err) {
    t.error(err)
    b.bind(a.address().port, function () {
      t.error(err)
      t.end()

      a.close()
      b.close()
    })
  })
})

test('utp', function (t) {
  t.equal(net.isUTP, true)
  t.end()
})
