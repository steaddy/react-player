import React, {useState, useRef} from 'react';
import Song from './Song';
import Player from './Player';
import Library from './Library';
import Nav from './nav';
import '../styles/app.scss';
import data from '../data';


const App = () => {

    // Refs
    const audioRef = useRef(null);

    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);

    //  Handlers

    const timeUpdateHandler = (e) => {
        const { currentTime } = e.target.currentTime;
        const { duration } = e.target.duration;
        // Calculate Percentage
        // const roundedCurrent = Math.round(currentTime);
        const roundedDuration = Math.round(duration);
        const animationPercentage = Math.round((currentTime / roundedDuration) * 100);
        setSongInfo({...songInfo, currentTime, duration, animationPercentage})
    };

    const songEndHandler = async () => {
        const currentIndex = songs.findIndex(song => currentSong.id === song.id);
        await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    };


    const activeLibraryHandler = (nextPrev) => {

        const newSongs = songs.map(mapSong => {
            if (mapSong.id === nextPrev.id) {
                return {
                    ...mapSong,
                    active: true,
                }
            } 
                return {
                    ...mapSong,
                    active: false,
                }
            
        });
        setSongs(newSongs);
    };

    return (
        <div className={`app ${libraryStatus ? 'library-active' : ''}`}>
            <Nav
                libraryStatus={libraryStatus}
                setLibraryStatus={setLibraryStatus}
            />
            <Song currentSong={currentSong}/>
            <Player
                audioRef={audioRef}
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                songs={songs}
                setCurrentSong={setCurrentSong}
                setSongs={setSongs}
                activeLibraryHandler={activeLibraryHandler}
            />
            <Library
                songs={songs}
                setCurrentSong={setCurrentSong}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
                libraryStatus={libraryStatus}
                activeLibraryHandler={activeLibraryHandler}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                src={currentSong.audio}
                onEnded={songEndHandler}
            />
        </div>
    );
};

export default App;