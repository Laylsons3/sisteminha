import Link from 'next/link';

function MenuLogin() {
    return(
        <ul className='flex flex-row absolute top-0 right-0 text-zinc-300'>
            <li className='mx-4 hover:underline'><Link href="/login">Login</Link></li>
            <li className='mx-4 hover:underline'><Link href="/cadastrar-usuario">Cadastrar Usuário</Link></li>
        </ul>
    )
}

export default MenuLogin;
