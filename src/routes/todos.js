const express = require("express");
const fs = require("fs");
const router = express.Router();

const TODOS_DB = "src/db/todos.json";
const CATEGORIES_DB = "src/db/categories.json"

/* Crear un endpoint `GET` que traiga todos los `todos`
   que tenga el servidor. Este enpoint limitará 
  por defecto a 5 los todos que estamos recogiendo.
  */
router.get("/", async (req, res) => {
    try { 
    const todolist = await fs.readFileSync(TODOS_DB);
    const categoriesList = await fs.readFileSync(CATEGORIES_DB)
    const todosJson = JSON.parse(todolist);
    const categoriesJson = JSON.parse(categoriesList);
    const showTodos = todosJson.slice(0,);
    console.log(showTodos)

    res.status(200).json({
        success: true,
        message: `todos ${showTodos.length} `,
        data: showTodos,
      });
    } catch(err) {
      console.log("error", err)
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });

    }
});

// Crear un endpoint `GET`
// que traiga un solo `todo` dada su `:id`.

router.get("/:id", async (req, res) => {
  try {
    const todolist = await fs.readFileSync(TODOS_DB);
    const todosJson = JSON.parse(todolist);
    const showId = todosJson.filter((todos)=> {
      return todos.id === Number(req.params.id)
    })
    console.log(req.params.id)

    res.status(200).json({
      succes: true,
      message: `Aqui tienes el id`,
      data: showId
    })


  } catch(err) { 
    console.log("error", err)
    res.status(500).json({
      success: false,
      message: "something went wrong",
  });
}
});

//Modificar los endpoints anteriores para que los todos que estamos
// trayendo tengan un campo `category` con la información de 
//la categoría que tengan asignada.


module.exports = router;