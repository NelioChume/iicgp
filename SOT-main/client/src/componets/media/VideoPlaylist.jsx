// src/components/media/VideoPlaylist.jsx
const VideoPlaylist = ({ videos, currentVideoIndex, onSelect }) => {
    return (
        <div className="bg-white rounded shadow-md w-full md:w-1/3 max-h-[500px] overflow-y-auto">
            {videos.map((video, index) => (
                <div
                    key={video.name}
                    onClick={() => onSelect(index)}
                    className={`p-4 border-b cursor-pointer hover:bg-gray-100 ${index === currentVideoIndex ? 'bg-orange-100' : ''
                        }`}
                >
                    <h3 className="font-medium">{video.displayName}</h3>
                    <p className="text-sm text-gray-600">{video.artist}</p>
                </div>
            ))}
        </div>
    );
};

export default VideoPlaylist;
