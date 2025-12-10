import { useState } from "react";
import { videoAlbums } from "../../data/videoAlbums";
import VideoAlbumCard from "../../componets/cards/VideoAlbumCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredAlbums, setFilteredAlbums] = useState(videoAlbums);

    const handleSearch = () => {
        const filtered = videoAlbums.filter((album) =>
            album.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            album.artist.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAlbums(filtered);
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="p-6 md:p-10">
            <div className="  mx-auto mb-8">
                <h2 className="text-3xl text-center sm:text-4xl font-bold text-orange-500 mb-4">
                    Pregações em áudio
                </h2>
                <p className="text-gray-700 text-center text-base sm:text-lg leading-relaxed">
                    Seja bem-vindo à seção de áudios! Aqui você pode explorar nossas pregações, que estão organizadas em álbuns. Use a barra de pesquisa para encontrar o que procura.
                </p>
            </div>

            {/* Centered Search Bar */}
            <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Pesquisar por título ou artista..."
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

            {/* Album Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {filteredAlbums.length > 0 ? (
                    filteredAlbums.map((album) => (
                        <VideoAlbumCard key={album.id} album={album} />
                    ))
                ) : (
                    <p className="text-gray-500 text-center col-span-full">Nenhum álbum encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default Video;
