
exports.findByToken = function(token, cb) {
  process.nextTick(function() {
    var someToken = "zaid"

      if (someToken === token) {
        return cb(null, someToken);
      }
    
    return cb(null, null);
  });
}