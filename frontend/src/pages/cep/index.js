import React, {useState} from 'react';
import api from '../../services/api'; 
import {Link} from 'react-router-dom'; 
import './styles.css';
import imageBuscarCep from '../../assets/images/buscarCEP.png';
export default function Cep()
{
    const [cep, setCep]= useState('')
    const [cidade, setCidade] = useState(''); 
    const [logradouro, setLogradouro] = useState(''); 
    const [bairro, setBairro] = useState(''); 
    const [uf, setUf] = useState('');

    async function handleCepResult(e)
    {
        e.preventDefault(); 
        const cepData = {
            cep,
        };
        
        try
        {
            
            await api.post('cep', cepData).then(response => 
                {
                    setCidade(response.data.localidade); 
                    setUf(response.data.uf);
                    setLogradouro(response.data.logradouro); 
                    setBairro(response.data.bairro); 
                   
                });
               
        }
        catch(err)
        {
            alert('Erro ao buscar dados relacionados ao CEP' + err); 
        }
    }

    return(
        <div className="cep-container">
        <div className="content">
        
        <form onSubmit={handleCepResult}>
        
            <input type="text" placeholder="Informe o CEP"
            value={cep} 
            onChange={e=>setCep(e.target.value)} pattern="[0-9]+" minLength="8" maxLength="8" required/>
            <button type="submit">Buscar CEP</button>
        </form>
        <img src={imageBuscarCep} alt="logoBuscarCEP"/>
        <section>
            <p>
                <h3>Informações:</h3>
                Logradouro: <input value={logradouro} className="logradouroInput" readOnly/><br/>
                Bairro: <input value={bairro} className="bairroInput" readOnly/><br/>
                Cidade: <input value={cidade} readOnly/> UF:<input value={uf} readOnly/> <br/>
            </p>
        </section>
        </div>
        </div>
    );
}