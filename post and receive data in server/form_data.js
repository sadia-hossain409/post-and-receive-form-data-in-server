const exp= require('express');
const app= exp();
const prs=require('body-parser');
app.use(prs.urlencoded({extended: false}));
app.use(prs.json());
app.get("/register",(req,res)=>{
res.sendFile(__dirname+"/from1.html");


});
app.post("/register",(req,res)=>{
const name=req.body.fullname;
res.send(name);

});
app.listen(3000,()=>{

    console.log("http://127.0.0.1:3000");
});