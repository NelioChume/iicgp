import { useEffect, useState } from "react";

const Playlist = ({ songs, currentSongIndex, onSongSelect }) => {
    const [durations, setDurations] = useState([]);

    useEffect(() => {
        const getDurations = async () => {
            const promises = songs.map((song) => {
                return new Promise((resolve) => {
                    const audio = new Audio(song.audioSrc);
                    audio.addEventListener("loadedmetadata", () => {
                        resolve(audio.duration);
                    });
                });
            });

            const results = await Promise.all(promises);
            setDurations(results);
        };

        getDurations();
    }, [songs]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60) || 0;
        const secs = Math.floor(seconds % 60) || 0;
        return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    return (
        <ul className="space-y-3 bg-white rounded-lg p-4 shadow-md border">
            {songs.map((song, index) => (
                <li
                    key={index}
                    className={`p-3 border rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-2 cursor-pointer transition hover:bg-gray-100 ${index === currentSongIndex ? "bg-gray-200 font-semibold" : ""
                        }`}
                    onClick={() => onSongSelect(index)}
                >
                    <div className="flex flex-col">
                        <span>{song.displayName}</span>
                        <span className="text-sm text-gray-600">{song.artist}</span>
                    </div>

                    <div className="flex items-center gap-4 mt-2 md:mt-0">
                        <span className="text-sm text-gray-500">
                            {durations[index] ? formatTime(durations[index]) : "⏳"}
                        </span>
                        <a
                            href={song.audioSrc}
                            download
                            className="text-gray-600 hover:text-blue-600 text-lg"
                            title="Download"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fas fa-download"></i>
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Playlist;
