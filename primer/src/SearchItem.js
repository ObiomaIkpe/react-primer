import React from 'react';


const SearchItem = ({search, setSearch}) => {
  return (

<form className='searchForm' onSubmit={(e) => e.preventDefault()}>
    <label htmlFor='search'>
    <input 
    id='search'
    type='text'
    placeholder='search'
    role='searchbox'
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />

    </label>
</form> 
   )
}

export default SearchItem