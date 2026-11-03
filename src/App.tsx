import { Provider as ChakraProvider } from "@/components/ui/provider"

import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import './App.css'

function App() {

  return (
    <>
     <ChakraProvider>
        <div id='main'>
          <Login/>
          <Profile/>
          <SignUp/>
        </div>
      </ChakraProvider>
    </>
  )
}

export default App
