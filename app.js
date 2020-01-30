
const mongoose = require('mongoose')
const User = require('./models/User') 
const express = require('express')
const app = express()
const bodyparser = require('body-parser')
 
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/mongoose')
mongoose.connection
.once('open', ()=> console.log("Connected"))
.on('error', (err)=>{
    console.log(`not connect`,err)
})


app.get('/',(req,res)=>{

res.send('ROOT')

})
app.post('/users',(req,res)=>{

    const newUser = new User({
    UserName: req.body.UserName,
    Score:req.body.Score, 
    age:req.body.age,
    isActive:req.body.isActive,
    Coin:req.body.Coin

})
    newUser.save().then(savedUser=>{
      res.send('USER SAVED')
    }).catch(err=>{
        res.status(404).send('User Not Save Because ....')
    })
})

app.get('/users',(req,res)=>{

    User.find({}).then(users =>{
        
        res.send(users)
    })
    
})





const port = 3000 || process.env.PORT

app.listen(port,()=>{

    console.log(`listening on port ${port}`)
})