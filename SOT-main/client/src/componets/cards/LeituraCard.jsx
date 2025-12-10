import { Link } from "react-router-dom";

const LeituraCard = ({ item }) => {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden flex flex-col justify-between">
            <div className="p-4">
                <h3 className="text-lg font-bold mb-4 text-blue-700">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{item.breathe}</p>
                <div className="text-xs text-gray-500">Autor: {item.author}</div>
                <div className="text-xs text-gray-400">Ano: {item.year}</div>
            </div>

            {/* Leia Mais Button */}
            <div className=" mt-5 p-4 pt-0 flex:justify-center text-center">
                <Link
                    to={`/pregacoes/leitura/${item.id}`}
                    className="inline-block bg-orange-700 hover:bg-orange-600 text-white text-sm font-semibold py-1.5 px-4 rounded transition duration-200"
                >
                    Leia Mais
                </Link>
            </div>
        </div>
    );
};

export default LeituraCard;
