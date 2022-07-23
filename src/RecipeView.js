import React from "react";

function RecipeView({recipe, key, deleteRecipe}){
  
  return(
    
      <tr key={key} className="zebra">
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td><img src={recipe.photo} alt={recipe.name}/></td>
        <td className="content_td"><p>{(recipe.ingredients)}</p></td>
        <td className="content_td"><p>{(recipe.preparation)}</p></td>
        <td><button name="delete" onClick={deleteRecipe}>Delete</button></td>
      </tr>
      
  );
}
export default RecipeView;