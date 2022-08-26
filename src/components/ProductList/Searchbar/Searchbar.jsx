import React from 'react'

function Searchbar() {
  return (
    <div className="group">
        <input
          className="inputS inputSs"
          type="text"
          placeholder="Search"
        //   onChange={(e) => handleChange(e)}
        //   value={name}
        />
        {/* <button className="btnS" type="submit" onClick={(e) => handleSubmit(e)}>
          <img className="icon" src={icons} alt="icon" />
        </button>  */}
    </div>
  )
}

export default Searchbar