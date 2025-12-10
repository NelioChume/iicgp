import { useState } from "react";
import { audioAlbums } from "../../data/audioAlbums";
import AudioAlbumCard from "../../componets/cards/AudioAlbumCard";
import { FaSearch } from "react-icons/fa";

const Audio = () => {
    const [query, setQuery] = useState("");
    const [filteredAlbums, setFilteredAlbums] = useState(audioAlbums);

    const handleSearch = () => {
        const lowerQuery = query.toLowerCase();

        const filtered = audioAlbums.filter(album =>
            album.title.toLowerCase().includes(lowerQuery) ||
            album.songs.some(song =>
                song.displayName.toLowerCase().includes(lowerQuery)
            )
        );
        setFilteredAlbums(filtered);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="p-4">
            <div className="  mx-auto mb-8">
                <h2 className="text-3xl text-center sm:text-4xl font-bold text-orange-500 mb-4">
                    Pregações em áudio
                </h2>
                <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed">
                    Seja bem-vindo à seção de áudios! Aqui você pode explorar nossas pregações, que estão organizadas em álbuns. Use a barra de pesquisa para encontrar o que procura.
                </p>
            </div>
            {/* Search Bar */}
            <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden max-w-md mx-auto mb-6">
                <input
                    type="text"
                    className="flex-grow px-4 py-2 focus:outline-none"
                    placeholder="Pesquisar álbuns ou músicas..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className="p-3 bg-gray-200 hover:bg-gray-300 transition"
                    onClick={handleSearch}
                >
                    <FaSearch />
                </button>
            </div>

            {/* Albums Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredAlbums.length > 0 ? (
                    filteredAlbums.map(album => (
                        <AudioAlbumCard key={album.id} album={album} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">
                        Nenhum álbum ou música encontrado.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Audio;
