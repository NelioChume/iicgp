// src/pages/Pregacoes/VideoAlbumPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { videoAlbums } from "../../data/videoAlbums";
import VideoPlayer from "../../componets/media/VideoPlayer";
import VideoPlaylist from "../../componets/media/VideoPlaylist";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const VideoAlbumPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const album = videoAlbums.find((a) => a.id === id);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    if (!album) return <div className="p-6 text-red-500">Álbum não encontrado</div>;

    return (
        <div className="p-6 md:p-10">
            <h1 className="text-3xl font-bold mb-6">{album.title}</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3">
                    <VideoPlayer
                        video={album.videos[currentVideoIndex]}
                        isPlaying={isPlaying}
                        setIsPlaying={setIsPlaying}
                    />
                </div>
                <VideoPlaylist
                    videos={album.videos}
                    currentVideoIndex={currentVideoIndex}
                    onSelect={(i) => {
                        setCurrentVideoIndex(i);
                        setIsPlaying(true);
                    }}
                />
            </div>
            {/* Back Button at the bottom */}
            <div className="mt-10 text-center">
                <button
                    onClick={() => navigate("/pregacoes/video")}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow inline-flex items-center"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default VideoAlbumPage;
