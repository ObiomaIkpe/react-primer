import Header from './Header';
import Content from './Content';
import SearchItem from './SearchItem';
import Footer from './Footer';
import AddItem from './AddItem';
import { useState } from 'react';
import apiRequest from './apiRequest';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));

const [newItem, setNewItem] = useState('');
const [search, setSearch] = useState('');

const setAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem('shoppingList', JSON.stringify(newItems));
}

const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems); 

  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions);
  if (result) setFetchError(result);
}

const handleCheck = async(id) => {
  console.log(`key : ${id}`)
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item
  ) 
  setAndSaveItems(listItems);

  const myItem = listItems.filter((item) => {item.id !== id});
  const updateOptions = {
    method : 'PATCH',
    headers: {
      'content-type' : 'application/json'
    }, 
    body: JSON.stringify({checked: myItem[0].checked})
  };
  const reqURL = `${API_URL}/${id}`;
  const result = await apiRequest(reqURL, updateOptions);
  if (result) setFetchError(result);
}

const handleDelete = async (id) => {
  const listItems = items.filter((item) => item.id !== id); 
  setAndSaveItems(listItems);

  const deleteOptions = {method: 'DELETE' };
  const reqURL = `${API_URL}/${id}`;

}

const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return false;
  console.log(newItem);
  //add Item
  addItem(newItem);
  setNewItem(' ');
}

  return (
    <div className="App">
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <AddItem 
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
      <Header  title="groceries"/>
      <Content items={items.filter(item => ((item.item).toLowerCase().includes(search.toLowerCase())))}
      setItems={setItems}
      handleCheck={handleCheck}
      handleDelete={handleDelete}/>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
