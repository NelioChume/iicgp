// src/components/cards/AudioAlbumCard.jsx
import { Link } from 'react-router-dom';

const AudioAlbumCard = ({ album }) => {
    return (
        <Link
            to={`/pregacoes/audio/${album.id}`}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden"
        >
            {/* Album Cover with fixed aspect ratio (16:9) */}
            <div className="relative pt-[56.25%] bg-white"> {/* 16:9 aspect ratio and white background */}
                <img
                    src={album.cover}
                    alt={album.title}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </div>

            {/* Info Section */}
            <div className="flex justify-between items-center p-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">{album.title}</h3>
                    <p className="text-sm text-gray-600">{album.artist}</p>
                </div>

                {/* Year Badge */}
                {album.year && (
                    <div className="bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                        {album.year}
                    </div>
                )}
            </div>
        </Link>
    );
};

export default AudioAlbumCard;
