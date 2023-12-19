<<<<<<< HEAD
import Input from "./Input";
import Square from "./Square";
import { useState } from "react";


function App() {

  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className="App">
      <Square 
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}/>
      <Input 
      colorValue={colorValue}
      setColorVaue={setColorValue}
      setHexValue={setHexValue}
      isDarkText={isDarkText}
      setIsDarkText={setIsDarkText}
      />
=======
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
>>>>>>> 85700b6b5008b1bb9aa2d48d460d3634e8e034f7
    </div>
  );
}

export default App;
