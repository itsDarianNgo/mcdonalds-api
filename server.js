const e = require('express')
const express = require('express')
const app = express ()
const PORT = 8000


const foods = {
    'big mac': {
        'calories': 10,
        'carbohydrates': 20, 
        'fat': 30,
        'protein': 40
    }, 
    'mcdouble':{
        'calories': 100,
        'carbohydrates': 209, 
        'fat': 300,
        'protein': 400
    },
    'cheeseburger':{
        'calories': 1000,
        'carbohydrates': 2000, 
        'fat': 3000,
        'protein': 4000
    },
    'unknown':{
        'calories': 'unknown',
        'carbohydrates': 'unknown', 
        'fat': 'unknown',
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

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})