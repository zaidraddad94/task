
exports.findByToken = function(token, cb) {
  process.nextTick(function() {
    var someToken = "zaidrddad"

      if (someToken === token) {
        return cb(null, someToken);
      }
    
    return cb(null, null);
  });
}