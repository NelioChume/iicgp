import { Link } from "react-router-dom";

const VideoAlbumCard = ({ album }) => {
    return (
        <Link
            to={`/pregacoes/video/${album.id}`}
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white"
        >
            {/* Image container with fixed aspect ratio */}
            <div className="relative pt-[56.25%] bg-white"> {/* use bg-white to avoid black bg */}
                <img
                    src={album.cover}
                    alt={album.title}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{album.title}</h3>
                <p className="text-sm text-gray-600">{album.artist}</p>
                <p className="text-sm text-gray-500 mt-1">{album.year}</p>
            </div>
        </Link>
    );
};

export default VideoAlbumCard;
