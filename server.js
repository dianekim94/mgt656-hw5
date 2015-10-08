var express = require('express');
var app = express();

app.get('/nickname', function(request, response){
    response.send('rich-pheasant');
});

app.listen(process.env.PORT || 4000);