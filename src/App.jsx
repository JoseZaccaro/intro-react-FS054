import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  
  return (
   
    <MainLayout>
      {/* <h1>App</h1> */}
      <Home prop1="prop2"/>
      {/* <About /> */}
    </MainLayout>
  )
}

export default App