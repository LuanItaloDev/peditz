import { ChakraProvider,  } from '@chakra-ui/react';
import './App.css';
import Main from './Components/Main/Main';
import SimpleSidebar from './Components/SideBar/SimpleSidebar';

export default function App() {
  return(
    <ChakraProvider>
      <SimpleSidebar children={undefined}/>
      <Main/>
    </ChakraProvider>    
  ) 
  ;
}

