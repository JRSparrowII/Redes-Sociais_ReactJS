import styles from './Post.module.css';

export function Post(){
 return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <img className={styles.avatar} src= "https://github.com/JRSparrowII.png"/>
                <div className={styles.authorInfo}>
                    <strong>Carlos Henrique</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            <time title="19 de julho de 2022 as 18:45h" dateTime='2022-07-19 08:11:37'>
                Publicado há 1h
            </time>
        </header>
        <div className={styles.content}>
            <p>Ola pessoal</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum reprehenderit et eos adipisci officiis modi quod iure incidunt, quaerat veniam illum assumenda, iusto aspernatur ducimus aliquam voluptates, sed voluptatibus numquam.</p>
            <p> <a href="#"> jane.designer.com</a></p>
            <p> <a href="http://"> Novo projeto Rockseat</a></p>

        </div>

    </article>
 )   
}