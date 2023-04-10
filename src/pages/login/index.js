import { useContext, useEffect, useCallback } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useNavigate } from 'react-router';
import styles from "./login.module.scss";



export function Login () {
  const {singInGoogle} = useContext(AuthGoogleContext)
  const navigate = useNavigate();

    useEffect(() => {

      if (sessionStorage.getItem('@AuthFirebase:token')) {
        return navigate('/home');
      }
    }, [singInGoogle, navigate]); 
    
    const handleSignIn =  useCallback(() => {
      const accessToken = sessionStorage.getItem('@AuthFirebase:token');
      if (!accessToken) {
        singInGoogle();
      }
    }, [singInGoogle]);

    return(
      <div >
        <section className={styles.container}>
          <article>
          <img src="../../images/Orkut.png" />
          </article>
          <div className={styles.line}></div>
          <article>
            <h2>Seja bem vindo</h2>
            <text>Faça seu login utilizando sua conta do Google</text>
            <button onClick={handleSignIn}>Login</button>
          </article>
        </section>
      </div>
    )
}