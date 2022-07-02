import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import { app, database } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

export default function CadastrarEmpresa() {

  const databaseRef = collection(database, 'EMPRESAS')

  const [mask, setMask] = useState('');
  const [cnpj, setCnpj] = useState('');

  const [razaoSocial, setRazaoSocial] = useState('');
  const [fantasia, setFantasia] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [inscricaoEstadual, setInscricaoEstadual] = useState('');
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState('');
  const [atividadePrincipal, setAtividadePrincipal] = useState('');
  const [atividadesSecundarias, setAtividadesSecundarias] = useState('');

  let router = useRouter();

  useEffect(() => {
    let token = sessionStorage.getItem('Token')
    if (!token){
        router.push('/cadastrar-usuario')
    }
  }, [router])

  const addData = () => {
    addDoc(databaseRef, {
      cnpj: cnpj,
      razaoSocial: razaoSocial,
      fantasia: fantasia,
      email: email,
      endereco: endereco,
      inscricaoEstadual: inscricaoEstadual,
      inscricaoMunicipal: inscricaoMunicipal,
      atividadePrincipal: atividadePrincipal,
      atividadesSecundarias: atividadesSecundarias
    })
    .then(() => {
      alert('Empresa Cadastrada')
      setCnpj('');
      setRazaoSocial('');
      setFantasia('');
      setEmail('');
      setEndereco('');
      setInscricaoEstadual('');
      setInscricaoMunicipal('');
      setAtividadePrincipal('');
      setAtividadesSecundarias('');
    })
    .catch((err) => {
      console.error(err)
    })
  }

  const [dados, setDados] = useState([]);

  useEffect(() => {

    if ( cnpj.length === 18 ) {
      fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj.replace(/[^\d]+/g, "")}`)
      .then((res) => res.json())
      .then((res => setDados(res)))

    }

  }, [cnpj])

  useEffect(() => {
    if (dados) {
      setRazaoSocial(dados.razao_social);
      setFantasia(dados.nome_fantasia);
      setEndereco(dados.descricao_tipo_de_logradouro === undefined ? '' : dados.descricao_tipo_de_logradouro + ' ' + dados.logradouro + ', ' + dados.numero + ', ' + dados.bairro + ', ' + dados.municipio + '-' + dados.uf);
      setAtividadePrincipal(dados.cnae_fiscal_descricao);
      setAtividadesSecundarias( dados.razao_social === undefined ? '' : dados.cnaes_secundarios.map((dado => (' ' + dado.descricao))));
    }
  }, [dados])

  return(
    <div>
      <Header />
      <main className='flex justify-center mt-2'>
        <div className='bg-gray-400 text-gray-900 max-w-[600px] w-full p-4'>
          <h1 className='flex justify-center text-lg font-bold mb-5'>CADASTRAR EMPRESA</h1>

          <div className='flex flex-col gap-1'>

            <div className='flex'>

              <strong className='mr-1'>CNPJ: </strong>
              <CpfCnpj
              placeholder='Digite o CPF ou CNPJ'
              className='w-full flex-1 px-2'
              value={cnpj}
              onChange={(e, type) => {
                setCnpj(e.target.value);
                setMask(type === "CNPJ");
              }}
            />
            </div>
            <div className='flex'>
              <strong className='mr-1'>RAZÃO SOCIAL: </strong>
              <input className='w-full flex-1 px-2' onChange={e => setRazaoSocial(e.target.value)} value={razaoSocial} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>FANTASIA: </strong>
              <input className='w-full flex-1 px-2' onChange={e => setFantasia(e.target.value)} value={fantasia} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>EMAIL: </strong>
              <input type="email" className='w-full flex-1 px-2' onChange={e => setEmail(e.target.value)} value={email} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>ENDEREÇO: </strong>
              <input className='w-full flex-1 px-2' onChange={e => setEndereco(e.target.value)} value={endereco} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>INSCRIÇÃO ESTADUAL (CGF): </strong>
              <input className='w-full flex-1 px-2' onChange={e => setInscricaoEstadual(e.target.value)} value={inscricaoEstadual} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>INSCRIÇÃO MUNICIPAL (ISS): </strong>
              <input className='w-full flex-1 px-2' onChange={e => setInscricaoMunicipal(e.target.value)} value={inscricaoMunicipal} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>ATIVIDADE PRINCIPAL: </strong>
              <input className='w-full flex-1 px-2' onChange={e => setAtividadePrincipal(e.target.value)} value={atividadePrincipal} />
            </div>
            <div className='flex'>
              <strong className='mr-1'>ATIVIDADE(S) SECUNDARIA(S): </strong>
              <input className='w-full flex-1 px-2' onChange={e => setAtividadesSecundarias(e.target.value)} value={atividadesSecundarias} />
            </div>

            <div className='flex justify-center mt-4 gap-1'>
              {/* <button className='bg-zinc-600 text-zinc-200 px-6 py-1 rounded hover:bg-zinc-700 transition-colors'
              type="reset">Limpar</button> */}
              <button
              onClick={addData}
              className='bg-zinc-600 text-zinc-200 px-10 font-medium py-1 rounded hover:bg-zinc-700 transition-colors'
              type="submit">Salvar</button>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
