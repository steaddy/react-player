import React from 'react';
import LibrarySong from './LibrarySong';
import Player from "./Player";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, activeLibraryHandler }) => (
        <div className={`library ${libraryStatus? "active-library" : ""}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong
                        key={song.id}
                        id={song.id}
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                        activeLibraryHandler={activeLibraryHandler}
                    />)}
            </div>
        </div>
    );

export default Library;