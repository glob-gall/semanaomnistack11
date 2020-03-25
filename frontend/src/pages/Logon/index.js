import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { FiLogIn} from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import LogoImg from '../../assets/logo.svg'
import herosImg from '../../assets/heroes.png'

export default function Logon(){

    const [id,setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('sessions',{id})
            
            localStorage.setItem('ongId',id)
            localStorage.setItem('ongName',response.data.name)
            history.push('/profile')

        }catch(err){
            alert('falha no login')
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="be the hero"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</ h1>
                
                    <input placeholder="sua ID"
                        value={id}
                        onChange={e=> setId(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Nao tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={herosImg} alt="Heroes"/>
        </div>
    )
}