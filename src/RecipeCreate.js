import React, { useState } from "react";

function RecipeCreate({createRecipe}) {
const initialFormData = {
    name: "", 
    cuisine:"",
    photo:"",
    ingredients:"",
    preparation: ""
  };
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
 const [formData, setFormData]=useState({...initialFormData});
  const handleChange = ({target})=>{
    setFormData({
      ...formData, 
      [target.name]:target.value,
    });   
  };
  const handleSubmit = (event)=>{
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormData});
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table> 
        <tbody>
          <tr className="zebra">
            <td><input name="name"
                  id="name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.name} required /></td>
            <td><input name="cuisine"
                  id="cuisine"
                  placeholder="Cuisine"
                  onChange={handleChange}
                  value={formData.cuisine} required /></td>
            <td><input name="photo"
                  id="photo"
                  placeholder="URL"
                  type="url"
                  onChange={handleChange}
                  value={formData.photo} required /></td>
            <td><textarea name="ingredients"
                  id="ingredients"
                  placeholder="Ingredients"
                  onChange={handleChange}
                  value={formData.ingredients} required /></td>
            <td><textarea name="preparation"
                  id="preparation"
                  placeholder="Preparation"
                  onChange={handleChange}
                  value={formData.preparation} required /></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
