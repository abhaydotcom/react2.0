 import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import {Provider} from 'react-redux'
import Index from './component/index.jsx'
import Type from './basic/index/nested/type.jsx'

createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
    
    <App/>
    <Index/>
    <Type/>

    </Provider>
)
