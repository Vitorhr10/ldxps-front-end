import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';
import api from '../../services/api';

function SellerForm() {
  const history = useHistory();

  const [dsnome, setDsnome] = useState('');
  const [cdtab, setCdtab] = useState('');
  const [dtnasc, setDtnasc] = useState('');
  const [clnome, setClnome] = useState('');
  const [idtipo, setIdtipo] = useState('');
  const [dslim, setDslim] = useState('');

  const [clientLists, setClientLists] = useState([
    { clnome: '', idtipo: '', dslim: 0 }
  ]);

  function addNewClient() {
    setClientLists([
      ...clientLists,
      { clnome: '', idtipo: '', dslim: 0 }
    ]);
  }

  function setClientListValue(position: number, field: string, value: string) {
    const updatedClientLists = clientLists.map((clientList, index) => {
      if (index === position) {
        return { ...clientList, [field]: value };
      }

      return clientList;
    });

    setClientLists(updatedClientLists);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('sellers', {
      dsnome,
      cdtab: Number(cdtab),
      dtnasc,
      clnome,
      idtipo,
      dslim: Number(dslim),
      cliente: clientLists
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');
    }).catch(() => {
      alert('Erro no cadastro!');
    })
  };

  return (
    <div id="page-seller-form" className="container">
      <PageHeader 
        title="Cadastro de vendedores e seus clientes"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Dados do vendedor</legend>

            <Input 
              name="dsnome" 
              label="Nome completo" 
              value={dsnome} 
              onChange={(e) => { setDsnome(e.target.value) }}
            />
            <Input 
              name="cdtab" 
              label="Código da tabela de preços padrão"
              value={cdtab} 
              onChange={(e) => { setCdtab(e.target.value) }}
            />
            <Input 
              name="dtnasc" 
              label="Data de nascimento"
              value={dtnasc} 
              onChange={(e) => { setDtnasc(e.target.value) }}
            />
          </fieldset>

          <fieldset>
            <legend>Dados do cliente
              <button type="button" onClick={addNewClient}>
                + Novo cliente
              </button>
            </legend>

            {clientLists.map((clientList, index) => {
              return (
                <div key={clientList.idtipo} className="create-client">
                  <Input 
                    name="clnome" 
                    label="Nome completo"
                    onChange={e => setClientListValue(index, 'clnome', e.target.value )} 
                    value={clientList.clnome} 
                    // onChange={(e) => { setClnome(e.target.value) }}
                  />
                  <Input 
                    name="idtipo" 
                    label="PF ou PJ"
                    value={clientList.idtipo} 
                    onChange={e => setClientListValue(index, 'idtipo', e.target.value )} 
                  />
                  <Input 
                    name="dslim" 
                    label="Limite de crédito"
                    value={clientList.dslim} 
                    onChange={e => setClientListValue(index, 'dslim', e.target.value )} 
                  />

                </div>
              );
            })}
          </fieldset>

          <footer>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default SellerForm;
