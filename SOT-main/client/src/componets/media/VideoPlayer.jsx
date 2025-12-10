// src/components/media/VideoPlayer.jsx
const VideoPlayer = ({ video, isPlaying, setIsPlaying }) => {
    return (
        <div className="bg-black rounded overflow-hidden shadow-md">
            <video
                src={video.videoSrc}
                controls
                autoPlay={isPlaying}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-[400px] object-contain"
            />
            <div className="p-4 bg-white">
                <h2 className="text-xl font-bold">{video.displayName}</h2>
                <p className="text-sm text-gray-600">{video.artist}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
