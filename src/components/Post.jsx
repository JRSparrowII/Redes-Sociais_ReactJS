import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({author, publishedAt}){
    const publishedDateFormated = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
        // timeStyle: 'full',

    }).format(publishedAt);

 return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title="19 de julho de 2022 as 18:45h" dateTime='2022-07-19 08:11:37'>
                {publishedDateFormated}
            </time>
        </header>
        <div className={styles.content}>
            
        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
                placeholder='Deixe um comentário'
            />
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>
        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>

    </article>
 )   
}