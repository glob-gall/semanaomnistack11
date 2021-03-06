import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'

import LogoImg from '../../assets/logo.svg'

export default function Register(){

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [whatsapp,setWhatsapp] = useState('')
    const [city,setCity] = useState('')
    const [uf,setUf] = useState('')

    const history = useHistory()

    async function renderRegister(e){
        e.preventDefault()

        const data={
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        const response = await api.post('ongs',data)
        try{

            alert(`seu ID de acesso: ${response.data.id}`)
            history.push('/')
        } catch (err){
            alert('erro no cadastro, tente novamente ')
        }
    } 

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="be the hero"/>
                    <h1>Cadastro</h1>
                    <p>faça eu cadastro, entre na plataforma,ajude pessoas encontrarem casos para sua ONG.</p>


                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Ja tenho cadastro
                    </Link>
                </section>
                <form onSubmit={renderRegister}>
                    <input placeholder="Nome da ONG" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder="E-mail" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp" 
                    value={whatsapp}
                    onChange={e => setWhatsapp(e.target.value)}
                    />
                    
                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />
                        <input placeholder="UF" style={{width:80}}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}