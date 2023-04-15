import React,{ useContext, useState } from "react"
import { AuthGoogleContext } from "../../contexts/authGoogle"
import styles from "./home.module.scss";
import Structure from "../../components/structure/index";


export  const Home = () =>{
    const {singOut, user} = useContext(AuthGoogleContext);
    const name = JSON.stringify(user)
    const objeto = JSON.parse(name)
    console.log(objeto)
    return(
        <div> 
            <nav className={styles.container}>
                <img src="../../images/Orkut.png"/>
                <ul>
                    <li>
                        <a href="https://">Inicio</a>
                    </li>
                    <li>
                        <a href="https://">Perfil</a>
                    </li>
                    <li>
                        <a href="https://">Recados</a>
                    </li>
                    <li>
                        <a href="https://">Amigos</a>
                    </li>
                    <li>
                        <a href="https://">Comunidades</a>
                    </li>
                    <li>
                        <a href="https://">Aplicativos</a>
                    </li>

                </ul>
                <section>
                    <input type="search" placeholder="Pesquisar no Orkut"/>
                </section>
                <section className={styles.users}>
                    <img src={objeto.photoURL}/>
                    <a>{objeto.displayName}</a>
                </section>
                <section className={styles.dropdown}>
                    <a>
                        <img src='../../images/down.svg'/>
                    </a>
                    <article className={styles.menu}>
                        <button onClick={()=> singOut()}>Sair</button>
                    </article>
                </section>
            </nav>
            <Structure/>
        </div>
    )
}
//