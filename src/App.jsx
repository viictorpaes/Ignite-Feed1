import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './app.module.css';

import './global.css';



const posts = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/viictorpaes.png',
      name: 'Victor Paes',
      role: 'CEO @Humores',
    },
    content:[
      {type: 'paragraph', content: 'Boa boa rapaziada 😊'},
      {type: 'paragraph', content: 'Ta ai a nova 😁'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio, É um projeto que fiz pelo trilha de React 🚀'}, 
      {type: 'paragraph', content: 'fique a vontade de testar 😁'},
      {type: 'link', content: 'github.com/viictorpaes'},
    ],
    publishedAt: new Date('2025-03-02 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CEO @Rocketseat',
    },
    content:[
      {type: 'paragraph', content: 'Ola Mundo 😀'},
      {type: 'paragraph', content: 'Realmente funciona, esse meu aluno eh muito bom 🆒'},     
      {type: 'link', content: 'https://github.com/diego3g'},
    ],
    publishedAt: new Date('2025-03-4 20:00:00'),
  },
  {
    id: 3,
    author:{
      avatarUrl: 'https://github.com/viiniciuspaes.png',
      name: 'Vinicius Paes',
      role: 'CEO @Torack Legion',
    },
    content:[
      {type: 'paragraph', content: 'Fala Boy👋'},
      {type: 'paragraph', content: 'Parabéns pelo projeto'},     
      {type: 'link', content: 'https://github.com/viiniciuspaes'},
    ],
    publishedAt: new Date('2025-03-4 20:00:00'),
  },
];

export function App() {
  return (
  <div>
    <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
           {posts.map(post =>{
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
           })}
        </main>
      </div>
    </div>
    
  )
}
