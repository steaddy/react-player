import React from 'react';
import {playAudio} from "../util";

const LibrarySong = ({ song,  setCurrentSong,  audioRef, isPlaying, activeLibraryHandler }) => {

    // Handlers
    const songSelectHandler = () => {
        setCurrentSong(song);
    activeLibraryHandler(song);
    };

    // Check if the song is playing
    playAudio(isPlaying, audioRef);

    const {name, cover, artist, active} = song;
    return (
        <div
            className={`library-song ${active ? " selected" : ""}`}
            onClick={songSelectHandler}
        >
            <img src={cover} alt={name}/>
            <div className="song-description">
                <h3>{name}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    );
};

export default LibrarySong;