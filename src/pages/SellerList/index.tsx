import { useState, FormEvent }  from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import api from '../../services/api';

import './styles.css';
 
function SellerList() {

  const [dsnome, setDsnome] = useState('');

  async function searchSellers(e: FormEvent) {
    e.preventDefault();

  const response = await api.get('sellers', {
      params: {
        dsnome,
      }
    });

    return response.data;
  }

  return (
    <div id="page-seller-list" className="container">
      <PageHeader title="Listagem de vendedores e seus clientes">
        <form id="search-sellers" onSubmit={searchSellers}>
          <Input 
            name="dsnome" 
            label="Nome do vendedor" 
            value={dsnome}
            onChange={(e) => { setDsnome(e.target.value) }}
          />
          
          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>


    </div>

  )
}

export default SellerList;