
exports.findByToken = function (token, cb) {
  process.nextTick(function () {
    // the token 
    var someToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYWRhbSJ9.KHKXDAQJVDqc18xjalNWZFsxeFNMNYo4VQehYhfZ9Kw" 
    // chick if the token valid 
    if (someToken === token) {
      return cb(null, someToken);
    }

    return cb(null, null);
  });
}