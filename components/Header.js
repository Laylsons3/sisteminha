import Menu from "./Menu";
import Head from "next/head";
import MenuLogin from "./MenuLogin";

export default function Header({ title }) {
    return(
        <div>
            <Head>
                <title>{title ? 'Sistema - ' + title : 'Sistema - Título'}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className='flex flex-col bg-slate-900'>
                <div className="text-center my-2">
                    <h1 className="text-2xl font-bold">{title || 'Título'}</h1>
                    <MenuLogin />
                </div>
                <div className="my-1">
                    <Menu />
                </div>
            </header>
        </div>

    )
}

