// src/pages/pregacoes/AlbumPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { audioAlbums } from "../../data/audioAlbums";
import MusicPlayer from "../../componets/media/MusicPlayer";
import Playlist from "../../componets/media/Playlist ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const AlbumPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const album = audioAlbums.find((a) => a.id === id);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!album) return <div className="p-6 text-red-500">Álbum não encontrado</div>;

    return (
        <div className="px-4 md:px-10 py-6">
            <h1 className="text-3xl text-center text-orange-500 font-bold mb-10">{album.title}</h1>

            <div className="flex flex-col md:flex-row gap-6 md:h-[500px]">
                {/* Music Player */}
                <div className="w-full md:w-3/5 h-full">
                    <MusicPlayer
                        songs={album.songs}
                        currentSongIndex={currentSongIndex}
                        setCurrentSongIndex={setCurrentSongIndex}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                        cover={album.cover}
                    />
                </div>

                {/* Playlist */}
                <div className="w-full md:w-2/5 h-full">
                    <div className="h-full overflow-y-auto">
                        <Playlist
                            songs={album.songs}
                            currentSongIndex={currentSongIndex}
                            onSongSelect={(index) => {
                                setCurrentSongIndex(index);
                                setIsPlaying(true);
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* Back Button at the bottom */}
            <div className="mt-10 text-center">
                <button
                    onClick={() => navigate("/pregacoes/audio")}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow inline-flex items-center"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default AlbumPage;
