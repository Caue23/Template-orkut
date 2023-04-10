import React,{ useContext } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import styles from "./structure.module.scss";

export default function Structure () {
    const {user} = useContext(AuthGoogleContext);
    const name = JSON.stringify(user);
    const objeto = JSON.parse(name);

    return (
        <div className={styles.container}>
            <ul>
                    <img src={objeto.photoURL}/>
                <li>
                    <p>{objeto.displayName}</p>
                </li>
                <li>
                    <p>masculino, solteiro</p>
                </li>
                <li>
                <p>Brasil</p>
                </li>
                <li>
                    
                <a><img src='../../../images/add.png'/>Adicionar</a>
                </li>
                <li>
                <a><img src='../../../images/block.png'/>Denunciar</a>
                </li>
                <li>
                <a><img src='../../../images/user.png'/>Perfil</a>
                </li>
                <li>
                <a><img src='../../../images/scraps.png'/>Recados (3)</a>
                </li>
                <li>
                <a><img src='../../../images/gallery.png'/>Galeria (40)</a>
                </li>
                <li>
                <a><img src='../../../images/depoiments.png'/>Depoimentos (39)</a>
                </li>
                <li>
                <a><img src='../../../images/apps.png'/>Aplicativos (2)</a>
                </li>
                
            </ul>
            <section>
                <main className={styles.mains}>
                    <h3>Inicio > Perfil</h3>
                    <p>{objeto.displayName}</p>
                    <input/>
                    <span>
                        <img src='../../../images/fãs.png'/>
                    </span>
                    <span>
                        <a>Confiável</a>
                        <img/>
                    </span>
                    <span>
                        <a>Legal</a>
                        <img/>
                    </span>
                    <span>
                        <a>Sexy</a>
                        <img/>
                    </span>
                    <ul>
                        <li>
                            relacionamento
                            <a>Solteiro</a>
                        </li>
                        <li>
                            quem sou eu
                            <a>Apenas um garoto emo em busca de pessoas para compartilhar arte e músicas :3</a>
                        </li>
                        <li>
                            país
                            <a>Brasil</a>
                        </li>
                        <li>
                            musica
                            <text>Mr. Kitty</text>
                            <text>Molchat Doma</text>
                            <text>Blink-182</text>
                            <text>Mäneskin</text>
                            <text>Alissic</text>
                            <text>Grimes</text>
                            <text>Motorama</text>
                            <text>IC3PEAK</text>
                        </li>
                        <li>
                            filmes
                            <text>Noiva Cadáver</text>
                            <text>Pulp Fiction</text>
                            <text>Sweeney Todd</text>
                        </li>
                        <li>
                            livros
                            <text>Fausto - Goethe</text>
                            <text>Divina Comédia - Dante</text>
                        </li>
                    </ul>
                    
                </main>
                <article>

                </article>
            </section>
            <section>
                <aside>

                </aside>
                <aside>

                </aside>
            </section>
        </div>
    )
}