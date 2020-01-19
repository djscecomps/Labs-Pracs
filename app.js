var express         =   require('express'),
    dotenv          =   require('dotenv').config(),
    bodyParser      =   require('body-parser'),
    mongoose        =   require('mongoose'),
    methodOverride  =   require('method-override'),
    app             =   express();

    app.set("view engine","ejs");
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride("_method"));
    app.use(express.static(__dirname + "/public"));
    
    app.listen(process.env.PORT,process.env.IP,()=>{
        console.log(`server runing on port ${process.env.PORT}`);
    });