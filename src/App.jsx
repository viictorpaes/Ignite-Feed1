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
      {type: 'paragraph', content: 'Opa bom dia  👋'},
      {type: 'paragraph', content: 'Ta ai a mais nova'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},     
      {type: 'link', content: 'github.com/viictorpaes'},
    ],
    publishedAt: new Date('2025-03-02 20:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/MirellaMonteiroM.png',
      name: 'Mirella Borba',
      role: 'CEO @Fashion',
    },
    content:[
      {type: 'paragraph', content: 'Ola mundo'},
      {type: 'paragraph', content: 'Meu primeiro post'},     
      {type: 'link', content: 'instagram.com/paesvp'},
    ],
    publishedAt: new Date('2025-03-4 20:00:00'),
  },
  {
    id: 3,
    author:{
      avatarUrl: 'https://github.com/viiniciuspaes.png',
      name: 'Vinicius Paes',
      role: 'CEO @Sky jungle',
    },
    content:[
      {type: 'paragraph', content: 'Fala👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},     
      {type: 'link', content: 'jane.design/doctorcare'},
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
