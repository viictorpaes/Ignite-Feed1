import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/viictorpaes.png" alt="" />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Paes</strong>
                            <time title="11 de fevereiro às 12:00h" dateTime="2025-02-11 12:00:00">Cerca de 1hr atrás</time>
                        </div>

                        <button title="Deletar Comentário">
                        <Trash size={24}/>
                        </button>
                    </header>

                    <p>Que massa 👏👏</p>
                </div>
            
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}