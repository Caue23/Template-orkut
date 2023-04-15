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
                    <p>masculino, casado</p>
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
                    <input type="text"/>
                    <span>
                        <img src='../../../images/fãs.png' data-type="destacada"/>
                    </span>
                    <span>
                        <img src='../../../images/confiavel.png' data-type="normal"/>
                    </span>
                    <span>
                        <img src='../../../images/legal.png' data-type="normal"/>
                    </span>
                    <span>
                        <img src='../../../images/sexy.png' data-type="normal"/>
                    </span>
                    <ul data-type="groupNormal">
                        <li>
                            <p>Relacionamento</p>
                            <a>Casado</a>
                        </li>
                        <li>
                            <p>Quem sou eu</p>
                            <textarea maxLength={98} type="text" placeholder="Digite aqui"/>
                        </li>
                        <li>
                            <p>País</p>
                            <a>Brasil</a>
                        </li>
                        <li>
                            <p>Musica</p>
                            <text>Raça negra</text>
                            <text>Soweto</text>
                            <text>Exaltasamba</text>
                        </li>
                        <li>
                            <p>Filmes</p>
                            <text>Bad Boys</text>
                            <text>Matrix</text>
                            <text>A Família Addams</text>
                        </li>
                        <li>
                            <p>Livros</p>
                            <text>Harry Potter</text>
                            <text>Senhor dos aneis </text>
                        </li>
                    </ul>
                    
                </main>
                <article>
                    <h2>Depoimentos(39)</h2>
                    <span>
                            <img src='../../../images/naldo2.png'/>
                            <ul className={styles.depoiments}>
                                <li>
                                    <h3>Naldo Benny</h3>
                                    <p>Vou te levar num lugar especial, para pessoas especiais.</p>
                                </li>
                            </ul>
                    </span>

                </article>
            </section>
            <section className={styles.friends}>
                <aside>
                    <h2>Amigos (800)</h2>
                    <p>Ver todos</p>
                </aside>
                <ul>
                    <li>
                        <img src='../../../images/naldo2.png'/>
                        <a>Naldo Benny</a>
                    </li>
                    <li>
                    <img src='../../../images/chris.jfif'/>
                        <a>Chris Brown</a>
                    </li>
                    <li>
                    <img src='../../../images/lebron.png'/>
                        <a>Lebron James</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src='../../../images/terry.jfif'/>
                        <a>Terry Crews</a>
                    </li>
                    <li>
                    <img src='../../../images/neymar.jfif'/>
                        <a>Neymar Jr</a>
                    </li>
                    <li>
                    <img src='../../../images/ronaldinho.jpg'/>
                        <a>Ronaldinho</a>
                    </li>
                </ul>
                <section className={styles.comunity}>
                    <aside >
                    <h2>Comunidades (56)</h2>
                    <p>Ver todos</p>
                    </aside>
                    <ul>
                    <li>
                        <img src='../../../images/garfield.jpg'/>
                        <a>Odeio acordar cedo</a>
                    </li>
                    <li>
                    <img src='../../../images/sorvete_negresco.jpg'/>
                        <a>Queria sorvete, mas era feijão</a>
                    </li>
                    <li>
                    <img src='../../../images/dormindo.jpeg'/>
                        <a>eu durmo na sala de aula</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src='../../../images/banho.png'/>
                        <a>Eu tomo banho pelado</a>
                    </li>
                    <li>
                    <img src='../../../images/madruga.png'/>
                        <a>Sr madruga nunca foi vagabundo</a>
                    </li>
                    <li>
                    <img src='../../../images/cerveja.png'/>
                        <a>A culpa é da cerveja</a>
                    </li>
                </ul>
                </section>
            </section>
        </div>
    )
}