import { Header } from "./components/Header"; 
import {Post} from "./Post";
import './global.css';


export function App() {  
  return (
    <div>
      <Header/>
      <Post 
        author="Henrique" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nulla temporibus amet corporis alias natus repudiandae sequi illo ab rem officiis ex. Facere quo sapiente voluptas, impedit provident blanditiis qui?"
      /> 
      <Post
        author="Prisco" 
        content="To fazendo um projeto muito legal"
      />
      <Post/>
      <Post/>
      <Post/>
    </div>
    
  )
}


