import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setinputValue ] = useState('Tokyo Revenger')

    const onInputChange = ({target}) =>{
        setinputValue (target.value);
    }

    const onSubmit = ( event) =>{
        event.preventDefault();
        if( inputValue.trim().length <=1 ) return;

        onNewCategory (inputValue.trim());
        // setCategories(categories => [ inputValue,...categories ]);
        setinputValue ('');
    }

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
            name="Buscador"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange={ onInputChange }

        />
    </form>
    
  )
}
