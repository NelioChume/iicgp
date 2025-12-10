import { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';

const MusicPlayer = ({
    songs,
    currentSongIndex,
    setCurrentSongIndex,
    isPlaying,
    setIsPlaying,
    cover,
}) => {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const currentSong = songs[currentSongIndex];

    // Play or pause when isPlaying changes
    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(console.error);
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    // Auto play on song change if already playing
    useEffect(() => {
        if (audioRef.current && isPlaying) {
            audioRef.current.play().catch(console.error);
        }
    }, [currentSongIndex]);

    const togglePlayPause = () => setIsPlaying(!isPlaying);

    const prevSong = () =>
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);

    const nextSong = () =>
        setCurrentSongIndex((prev) => (prev + 1) % songs.length);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleProgressClick = (e) => {
        const progressBar = e.currentTarget;
        const clickX = e.nativeEvent.offsetX;
        const width = progressBar.clientWidth;
        const newTime = (clickX / width) * duration;

        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

    return (
        <div className="bg-gray-200 rounded-2xl shadow-md p-4 flex flex-col items-center">
            {/* Album cover */}
            <img
                src={cover || '/assets/cover/img1.jpg'}
                alt="Album Cover"
                className="w-48 h-48 object-cover rounded-xl mb-4"
            />

            {/* Song info */}
            <h2 className="text-lg font-bold text-center">{currentSong.displayName}</h2>
            <p className="text-gray-600 text-center mb-2">{currentSong.artist}</p>

            {/* Audio element */}
            <audio
                ref={audioRef}
                src={currentSong.audioSrc}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onEnded={nextSong}
            />

            {/* Progress bar */}
            <div className="w-full mt-4 cursor-pointer" onClick={handleProgressClick}>
                <div className="h-1 bg-gray-300 rounded">
                    <div
                        className="h-1 bg-blue-600 rounded"
                        style={{ width: `${progressPercentage}%` }}
                    />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center gap-6 mt-4 text-2xl text-blue-600">
                <button onClick={prevSong}><FaBackward /></button>
                <button onClick={togglePlayPause}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </button>
                <button onClick={nextSong}><FaForward /></button>
            </div>
        </div>
    );
};

export default MusicPlayer;
