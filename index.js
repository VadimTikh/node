const express = require("express");
const app = express();

app.get("/api/privat", function(req, res){
if (req.query.token != 'toptechapitoken') {
  res.send('wrong token!');
  return;
}
  const Merchant = require('privatbank-api');

  merchant = new Merchant({
        id: req.query.id,
        password: req.query.password,
      //id: '201262',
      //password: '0o7wOPj5yIseW0l3jR3MxA5I7ZuN3R95',
      country: 'UA'
  });

  merchant.statement(req.query.card, req.query.sd+"."+req.query.sm+'.'+req.query.sy,
   req.query.ed+"."+req.query.em+'.'+req.query.ey)
      .then((statements) => {
        res.send(statements);
  });
});
app.listen(80);
