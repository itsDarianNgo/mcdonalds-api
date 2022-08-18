const e = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const foods = {
    'hamburger': {
        'calories': 250,
        'fat': 9, 
        'carbohydrates': 31,
        'protein': 12
    },
    'cheeseburger':{
        'calories': 300,
        'fat': 12, 
        'carbohydrates': 33,
        'protein': 15
    },
    'big mac': {
        'calories': 540,
        'fat': 29, 
        'carbohydrates': 45,
        'protein': 25
    }, 
    'double cheeseburger':{
        'calories': 440,
        'fat': 23, 
        'carbohydrates': 34,
        'protein': 25
    },
    'mcdouble':{
        'calories': 390,
        'fat': 19, 
        'carbohydrates': 33,
        'protein': 22
    },

    'unknown':{
        'calories': 'unknown',
        'fat': 'unknown', 
        'carbohydrates': 'unknown',
        'protein': 'unknown'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,response)=>{
    const foodName = request.params.name.toLowerCase()
    if ( foods[foodName] ){
        response.json(foods[foodName])
    }else {
        response.json(foods['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})