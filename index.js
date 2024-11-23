const express = require("express");//s1
const app = express();//s2
const mongoose = require("mongoose");//s3
const path = require("path");//s8
const Chat = require("./models/chat");//s11
const methodOverride = require('method-override');


app.set("views",path.join(__dirname,"views"));//s9
app.set("view engine","ejs");//s10
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(()=>{console.log("Connection Sucessfull")})
.catch(err => console.log(err));//s6

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
};//s7

// let chat1 = new Chat({
//     from:"Cindralla",
//     to:"Prafull",
//     msg:"Where are you both,I am waiting",
//     created_at:new Date(),
// });
// chat1.save()
// .then((res)=>{console.log(res)})
// .catch((err)=>{console.log(err)})

app.get("/",(req,res)=>{
    res.send("Root is Working");
})//s5

// index route
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})
// new chat
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})
// edit route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//update route
app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {msg:newMsg} = req.body;
    console.log(newMsg);
    let updatedChat = await Chat.findByIdAndUpdate(id,
        {msg:newMsg},
        {runValidators:true,new:true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
})
//delete route
app.delete("/chats/:id",async (req,res)=>{
    let {id} =req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats")
});
// create route
app.post("/chats",(req,res)=>{
    let{from,to,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date(),
    })
    newChat.save().then((res)=>{console.log("Chat was Saved")}).catch((err)=>{console.log(err)});
    res.redirect("/chats")
})


app.listen(1111,()=>{
    console.log("Server is running at port 1111");
})//s4