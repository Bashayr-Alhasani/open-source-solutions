const express = require('express');
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const methodOverride = require('method-override');



const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));


mongoose.connect('mongodb://localhost/', {useNewUrlParser : true , useUnifiedTopology: true } )
.then(()=> console.log('Mongodb is running'),(err)=> console.log(err) );




app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){ //if checked, req.body.readyToEat is set to 'on'
        req.body.readyToEat = true;
    } else { //if not checked, req.body.readyToEat is undefined
        req.body.readyToEat = false;
    }
    Fruit.create(req.body, (error, createdFruit)=>{
        res.send(createdFruit);
    });
});


app.get('/fruits', (req, res)=>{
    Fruit.find({}, (error, allFruits)=>{
        res.render('index.ejs', {
            fruits: allFruits
        });
    });
});

app.get('/fruits/new', (req, res)=>{
        res.render('create.ejs');
});


app.post('/fruits/new' , (req , res) =>{
    Fruit.create(req.body)
    .then((fruit)=>{
        console.log(fruit)
        res.redirect('/fruits')
    })
    .catch((err) => console.log(err))
    });


app.get('/fruits/:id', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{
        res.render('show.ejs', { fruit:foundFruit });
    });
});


app.delete('/fruits/:id', (req, res)=>{
    Fruit.findByIdAndRemove(req.params.id, (err, data)=>{
        res.redirect('/fruits');//redirect back to fruits index
    });
});

app.get('/fruits/:id/edit', (req, res)=>{
    Fruit.findById(req.params.id, (err, foundFruit)=>{ //find the fruit
        res.render(
    		'update.ejs',
    		{
    			fruit: foundFruit //pass in found fruit
    		}
    	);
    });
});

app.put('/fruits/:id', (req, res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false;
    }
    Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
        res.redirect('/fruits');
    });
    });


app.listen(3000, () => {
   console.log("Server is listening on port 3000");
});