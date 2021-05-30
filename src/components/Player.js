import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons';
import {playAudio} from "../util";

const Player = ({currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setCurrentSong, setSongs, activeLibraryHandler}) => {

    const getTime = time => (
            `${Math.floor(time / 60)  }:${  (`0${  Math.floor(time % 60)}`).slice(-2)}`
        );


    // Event handlers
    const playSongHandler = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying);
            audioRef.current.pause();
        } else {
            setIsPlaying(!isPlaying);
            audioRef.current.play();
        }
    };

    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    };

    const skipTrackHandler = (direction) => {
        const currentIndex = songs.findIndex(song => currentSong.id === song.id);
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
        }
        if (direction === 'skip-back') {
            if ((currentIndex - 1) % songs.length === -1) {

                setCurrentSong(songs[songs.length - 1]);
                activeLibraryHandler(songs[songs.length - 1]);
                playAudio(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
            activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
        }
        playAudio(isPlaying, audioRef);
    };

    return (
        <div className="player-container">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <div className="track" style={{background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`}}>
                    <input
                        onChange={dragHandler}
                        min={0}
                        max={songInfo.duration || 0}
                        value={songInfo.currentTime}
                        type="range"
                    />
                    <div className="animate-track" style={{transform: `translateX(${songInfo.animationPercentage}%)`}} />
                </div>
                <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    className="skip-back"
                    icon={faAngleLeft}
                    size="2x"
                    onClick={() => skipTrackHandler('skip-back')}
                />
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={
                    isPlaying ? faPause : faPlay
                } size="2x"/>
                <FontAwesomeIcon
                    className="skip-forward"
                    icon={faAngleRight}
                    size="2x"
                    onClick={() => skipTrackHandler('skip-forward')}
                />
            </div>
        </div>
    );
};

export default Player;