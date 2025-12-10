import { useState } from "react";
import { leituraItems } from "../../data/leituraData";
import LeituraCard from "../../componets/cards/LeituraCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Leitura = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Ordena os itens alfabeticamente por título
    const sortedItems = [...leituraItems].sort((a, b) =>
        a.title.localeCompare(b.title)
    );

    const [filteredItems, setFilteredItems] = useState(sortedItems);

    const handleSearch = () => {
        const lower = searchTerm.toLowerCase();
        const filtered = leituraItems.filter(item =>
            item.title.toLowerCase().includes(lower) ||
            item.author.toLowerCase().includes(lower)
        );
        // Ordena também os resultados filtrados
        const sortedFiltered = filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
        setFilteredItems(sortedFiltered);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
            <div className="mx-auto max-w-4xl mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 text-center mb-4">
                    Pregações Escritas
                </h2>
                <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed">
                    Explore nossos ensinamentos escritos e descubra novas revelações da Palavra. Use a barra de pesquisa para filtrar por título ou autor.
                </p>
            </div>

            {/* Search Bar */}
            <div className="flex justify-center mb-10">
                <div className="relative w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Pesquisar por título ou autor..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        onClick={handleSearch}
                    />
                </div>
            </div>

            {/* Short Cards with Title + Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <LeituraCard key={item.id} item={item} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-600">
                        Nenhum resultado encontrado para "{searchTerm}".
                    </p>
                )}
            </div>
        </div>
    );
};

export default Leitura;
