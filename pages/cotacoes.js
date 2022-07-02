import Header from "../components/Header";
import {
  BsExclamationCircleFill,
  BsFillXCircleFill,
  BsCheckCircleFill
 } from 'react-icons/bs';
 import Link from 'next/link';

export default function Cotacoes() {
  return(
    <div>
      <Header title="Cotações" />
      <div className="flex justify-center mt-2">
      <div className="w-full p-2 flex flex-col justify-center">
        <div className="mb-2">
          <Link href="/co"><a className="bg-zinc-500 py-1 px-2 rounded hover:bg-zinc-600 transition-colors">Fazer nova cotação</a></Link>
        </div>
        <table>
          <thead>
            <tr className="bg-gray-600">
                <th className="border border-gray-500 px-2">OBJETO</th>
                <th className="border border-gray-500 px-2">DATA ENVIO</th>
                <th className="border border-gray-500 px-2">EMPRESAS</th>
                <th className="border border-gray-500 px-2">EMAIL</th>
                <th className="border border-gray-500 px-2">STATUS</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr>
              <td className="border border-gray-500 text-justify max-w-md px-1">AQUISIÇÃO DE CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS CADEIRAS  </td>
              <td className="border border-gray-500 text-center">02/07/2022</td>
              <td className="border border-gray-500">
                <div className="mx-1">EMPRESA COTAÇÃO NUMERO 1</div>
                <div className="mx-1">OUTRA EMPRESA 2</div>
                <div className="mx-1">MAIS UMA EMPRESA 3</div>
              </td>
              <td className="border border-gray-500">
                <div className="mx-1">email1@email.com</div>
                <div className="mx-1">email2@email.com</div>
                <div className="mx-1">email3@email.com</div>
              </td>
              <td className="border border-gray-500">
                <div className="flex flex-col justify-center">
                  <div className="flex flex-row items-center justify-center mx-1"> <BsExclamationCircleFill className="mr-1 text-yellow-400" /> aguardando</div>
                  <div className="flex flex-row items-center justify-center mx-1"> <BsCheckCircleFill className="mr-1 text-green-500" /> recebido</div>
                  <div className="flex flex-row items-center justify-center mx-1"> <BsFillXCircleFill className="mr-1 text-red-400" /> recusado</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  )
}
