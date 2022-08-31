import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { getByProduct } from '../../../redux/action';

function SearchAdmin() {
    const dispatch = useDispatch()
    const [name,setName] = useState("");

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getByProduct(name))
        setName("")
    }
  return (
    <div className="group">
        <input
          className="inputS inputSs"
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e)}
          value={name}
        />
        <button className="btnS" type="submit" onClick={(e) => handleSubmit(e)}>
          <span>Buscar</span>
        </button> 
    </div>
  )
}

export default SearchAdmin