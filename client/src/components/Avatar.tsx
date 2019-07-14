// import useState next to FunctionComponent
import React from 'react';
import { ICharacter } from '../utils/interfaces';

/**
 * Display the name of a character with their picture.
 * @param character 
 */
function Avatar(character: ICharacter) {

    return (
        <div className="avatar-container">
            <img
                alt={character.name}
                className="avatar"
                src={character.picture}
            />
        </div>
    );
}

export default Avatar;