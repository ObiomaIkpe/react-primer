import React from 'react';
import colorNames from 'colornames';

const Input = ({colorValue, setColorVaue, setHexValue, isDarkText, setIsDarkText}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add Color Name</label>
        <input autoFocus
        type='text'
        placeholder='add color name'
        required
        value={colorValue}
        onChange={(e) => {setColorVaue(e.target.value);
                         setHexValue(colorNames(e.target.value));
                        }}
        />
        <button 
        type='button'
        onClick={() => setIsDarkText(!isDarkText)}>
            Toggle text color
        </button>
    </form>
  )
}

export default Input