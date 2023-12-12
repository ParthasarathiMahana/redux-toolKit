import './App.css'
import FoodItem from './components/FoodItem'
import { Provider } from 'react-redux'
import { myStore } from './redux/store'

function App() {

  return (
    <>
    <Provider store={myStore}>
      <FoodItem/>
    </Provider>
    </>
  )
}

export default App
