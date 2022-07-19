import { Header } from "./components/Header"; 
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import styles from './components/App.module.css';
import './global.css';


export function App() {  
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="Henrique"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quas nesciunt laboriosam adipisci illo reiciendis dolor eum, cupiditate placeat, quisquam, quos nulla suscipit veniam iusto! Debitis nulla id placeat facilis."
          />
          <Post
            author="Prisco"
            content="To fazendo um projeto bem legal."
          />
        </main>        
      </div>
    </div>
    
  )
}


