import { useState } from "react";
import { AddCategory,GifGrid } from "./componets";

export const GitExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch' ])

    const onAddCategory = ( newCategory ) =>  {
        if( categories.includes (newCategory) ) return;
        setCategories( [ newCategory,...categories ] )
    }

  return (
    <>
    <h1>GitExpertApp</h1>

    <AddCategory 
    // setCategories={ setCategories }
    onNewCategory={ event => onAddCategory(event)}
    />


    { categories.map( (category) => (
        <GifGrid key={ category } category={ category}/>
        ))
        
    }
        
 

    </>
  )
}
