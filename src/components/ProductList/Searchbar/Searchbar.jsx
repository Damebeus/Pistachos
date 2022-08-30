import React from "react";
import style from "./Searchbar.module.css";
function Searchbar() {
  return (
    <div className={style.container}>
      <input
        type='text'
        placeholder='🔎 Que quieres comer hoy?'
        //   onChange={(e) => handleChange(e)}
        //   value={name}
      />
      {/* <button className="btnS" type="submit" onClick={(e) => handleSubmit(e)}>
          <img className="icon" src={icons} alt="icon" />
        </button>  */}
    </div>
  );
}

export default Searchbar;
