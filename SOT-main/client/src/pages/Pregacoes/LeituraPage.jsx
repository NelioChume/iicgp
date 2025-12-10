import { useParams, useNavigate } from "react-router-dom";
import { leituraItems } from "../../data/leituraData"; // Adjust the import path as necessary
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const LeituraPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const leitura = leituraItems.find((item) => item.id === id);

    if (!leitura) {
        return <div className="p-6 text-red-600">Leitura não encontrada.</div>;
    }

    return (
        <div className="p-6 md:p-10 bg-gray-50 min-h-screen max-w-5xl mx-auto">
            <h1 className="text-3xl text-center text-orange-500 font-bold mb-6">
                {leitura.title}
            </h1>

            <div
                className="prose prose-span:text-xl prose-span:font-semibold prose-p:leading-relaxed max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: leitura.content }}
            />

            <div className="mt-10 text-sm text-gray-600 border-t pt-4 text-center">
                <p><strong>Autor:</strong> {leitura.author}</p>
                <p><strong>Ano:</strong> {leitura.year}</p>
            </div>

            {/* Back Button at the bottom */}
            <div className="mt-10 text-center">
                <button
                    onClick={() => navigate("/pregacoes/leitura")}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow inline-flex items-center"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default LeituraPage;
