import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css'
import Landing from './components/Landing';

function App() {

  function AppRoutes() {
    let routes = useRoutes([
      { path: '/', element: <Landing />},
    ])
    return routes;
  }


  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  )
}

export default App
