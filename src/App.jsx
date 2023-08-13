
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './routes/ItemListContainer'
import ItemDetailContainer from './routes/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FooterContainer from './components/FooterContainer/FooterContainer'
import ContactContainer from './routes/ContactContainer'

function App() {

  return(
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a la tienda online!'} />}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a la tienda online!'}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/contactanos' element={<ContactContainer/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      <FooterContainer/>
      </BrowserRouter>
    </>
  )
}

export default App

