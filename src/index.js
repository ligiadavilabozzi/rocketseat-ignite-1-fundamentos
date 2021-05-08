const express = require('express');
const app = express(); 

/**Método GET */
app.get('/courses', (req,res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3"])
})

/**Método POST */
app.post('/courses',(req, res) => {
    return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"])
})

/**Método PUT */
app.put('/courses/:id', (req,res) =>{
    const {id} = req.params     // ou const params = req.params; console.log(params)
    console.log(id)
    return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"])
    
})

/**Método PATCH */
app.patch('/courses/:id', (req,res) => {
    return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"])
})

/**Método DELETE */
app.delete('/courses/:id',(req,res) => {
    return res.json(['Curso 6', 'Curso 2', 'Curso 5'])
})


app.listen(3333); 
