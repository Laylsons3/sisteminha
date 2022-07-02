import Link from 'next/link';

function Menu() {
    return(
        <ul className='flex flex-row'>
            <li className='mx-4 hover:underline'><Link href="/">Inicio</Link></li>
            <li className='mx-4 hover:underline'><Link href="/cadastrar-empresa">Cadastrar Empresa</Link></li>
            <li className='mx-4 hover:underline'><Link href="/empresas-cadastradas">Empresas Cadastradas</Link></li>
            <li className='mx-4 hover:underline'><Link href="/cotacoes">Cotações</Link></li>
        </ul>
    )
}

export default Menu;
