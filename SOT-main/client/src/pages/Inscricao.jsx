// src/pages/Inscricao.jsx
import SubscriptiomForm from "../componets/forms/SubscriptiomForm";
import img from "../assets/cover/esv.jpg";

const Inscricao = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Conteúdo principal */}
            <main className="flex-1 py-10 px-4">
                {/* Top text */}
                <div className="text-center mb-8 px-2">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Inscrição para a Escola Bíblica
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Preencha o formulário abaixo para se inscrever
                    </p>
                </div>

                {/* Form + image */}
                <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-6xl mx-auto gap-10 px-4 sm:px-6 md:px-10">
                    <div className="w-full lg:w-1/2">
                        <SubscriptiomForm />
                    </div>

                    {/* Image + text (only on large screens) */}
                    <div className="hidden lg:block lg:w-1/2">
                        <p className="mb-6 text-gray-600 text-lg leading-relaxed">
                            Nosso prazer sempre foi ajudar as pessoas a crescerem no Senhor e
                            se tornarem firmes na doutrina de Cristo.
                        </p>
                        <img
                            src={img}
                            alt="Bible Study"
                            className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
                        />
                    </div>
                </div>

                {/* Versículo */}
                <div className="text-center mt-12 px-4 sm:px-6 md:px-10">
                    <h4 className="font-bold text-2xl text-orange-500 mb-2">
                        Nosso versículo chave
                    </h4>
                    <p className="text-xl leading-relaxed text-gray-800">
                        ¹⁷ Santifica-os na tua verdade; a tua palavra é a verdade.
                        <br />
                        <span className="text-gray-500">João 17:17</span>
                    </p>
                </div>
            </main>

            {/* Footer sempre no fim da tela */}
        </div>
    );
};

export default Inscricao;
