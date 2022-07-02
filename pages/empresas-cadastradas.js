import Header from "../components/Header";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { app, database } from '../firebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import Link from "next/link";
import { ImSpinner9 } from 'react-icons/im'

function EmpresasCadastradas() {

    const databaseRef = collection(database, 'EMPRESAS')
    const [fireData, setFireData] = useState([]);

    let router = useRouter();

    useEffect(() => {
      let token = sessionStorage.getItem('Token')
      if (token){
        getData()
      }
      if (!token){
          router.push('/cadastrar-usuario')
      }
    }, [router]) //eslint-disable-line

    const getData = async () => {
        await getDocs(databaseRef)
        .then((res) => {
            setFireData(res.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    console.log(fireData)

    return(
        <div>
            <Header title="Empresas Cadastradas" />
            <div className="flex justify-center mt-2">
            <div className="w-full  p-2">
                <h1 className="flex justify-center bg-gray-700 py-4 text-xl font-bold mb-4">EMPRESAS CADASTRADAS</h1>

                {/* <input placeholder="Pesquisar" /> */}

                {fireData.length === 0 ? (
                    <div className="flex justify-center mt-12"><ImSpinner9 className="h-6 w-6 animate-spin" /></div>
                ) : (
                    <div className="grid grid-cols-1 gap-1 text-sm">
                    <table>
                        <thead>
                            <tr className="bg-gray-600">
                                <th className="border border-gray-500 w-32">CNPJ</th>
                                <th className="border border-gray-500">RAZÃO SOCIAL</th>
                                <th className="border border-gray-500">FANTASIA</th>
                                <th className="border border-gray-500">EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                        {fireData.map((empresa => (
                            <tr key={empresa.id}>
                                <td className="border border-gray-500">{empresa.cnpj}</td>
                                <td className="border border-gray-500 font-medium hover:underline"><Link href={`/empresa/${empresa.cnpj.replace(/[^\d]+/g, "")}`}>{empresa.razaoSocial}</Link></td>
                                <td className="border border-gray-500">{empresa.fantasia}</td>
                                <td className="border border-gray-500">{empresa.email}</td>
                            </tr>
                        )))}
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            </div>
        </div>
    )
}

export default EmpresasCadastradas;
