var express=require('express');
var app=express();
var path=require('path');
var port=process.env.PORT || 3000;
var apiRouter = express.Router();

app.use('/api', apiRouter);
app.use(express.static(__dirname+'/'));

app.get('/',function(req,res)
{
res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(port);
console.log('listening to port' +port);
