import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import AuthChecker from './auth/AuthChecker'
import Navbar from './components/Navbar'
import routes from './config/routes'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <div className="w-full">
      <Navbar/>
        <Provider store={store}>
        <Routes>
        { routes.map ((route: any, index: any) => (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                  <AuthChecker>
                    <route.component/>
                  </AuthChecker> 
                  ):(
                    <route.component/>
                  )
              }/>
            ))}
        </Routes>
        </Provider>
        </div>
    </BrowserRouter>
  )
}

export default App
