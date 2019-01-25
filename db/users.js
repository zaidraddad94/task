
exports.findByToken = function(token, cb) {
  process.nextTick(function() {
    var someToken = "eyJ0sdAiOksl1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MjMzNTAyOTMsImlhdCI6MTUyMDc3MDI5Mywic3ViIjoiNWFhNTExN2I0ZDhlMjcyY2U0YTZlMGFlIn0.1f-AAAXHTgzfEn-R6MB1W31_F2umR_Gej9UnJ2eGOOA"

      if (someToken === token) {
        return cb(null, someToken);
      }
    
    return cb(null, null);
  });
}