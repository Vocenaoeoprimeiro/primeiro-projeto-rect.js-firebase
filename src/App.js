import React, { useState } from 'react';
import { db, auth } from './firebase';
import 'firebase/auth';

import './App.css';
import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';



function App(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const [msg, setmsg] = useState();

    async function cadadastrar(){
        await createUserWithEmailAndPassword(auth, email, senha)
            .then(resposta => {
                setmsg('sucesso')
            })
            .then(() => {
                setEmail('');
                setSenha('');
            })
            .catch(erro => {
                setmsg('erro')
                console.log(erro);
            });
    }

    
    return(
        <div className="App">
            <h1>Aula de conexão com Firebase</h1>

            <form className='App-form'>
                <input 
                    onChange={(e) => setEmail(e.target.value)} 
                    
                    value={email} type="email" 
                    className='App-form-input' 
                    placeholder='Email' 
                    />

                <input 
                onChange={(e) => setSenha(e.target.value)} 
                value={senha} type="password" className='App-form-input' 
                placeholder='Senha' />

                {msg === 'sucesso' && <span>Wow! Você cadastrou com sucesso!</span>}
                {msg === 'erro' && <span>Wow! Você cadastrou com sucesso!</span>}

                <button onClick={cadadastrar}  type='button' className='App-form-button'>Cadastrar</button>
                
            </form>
        </div>
    );
}

export default App;

