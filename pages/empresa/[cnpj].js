import Header from "../../components/Header";

function Empresa() {
    return(
        <div>
            <Header />
            <div className="flex justify-center mt-2">
            <div className="w-full  p-2">
                <h1 className="flex justify-center bg-gray-700 py-4 text-xl font-bold mb-4">DADOS DA EMPRESA</h1>
                <div>RAZÃO SOCIAL: </div>
                <div>FANTASIA: </div>
                <div>EMAIL: </div>
                <div>etc...</div>
            </div>
            </div>
        </div>
    )
}

export default Empresa;
