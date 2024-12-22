import {useState} from 'react';

export default function Player({name = 'Player', symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const [editedName, setEditedName] = useState(name);

    const handleChange = (event) => {
        console.log(event.target.value);
        if (isEditing) setEditedName(event.target.value);
    }

    const handleClick = () => {
        if (isEditing) setPlayerName(editedName);
        setIsEditing((editing) => !editing);
    }

   return (
       <li>
            <span className="player">
                {isEditing ?
                    <input type="text" value={editedName} onChange={handleInput}/> :
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
           <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>
   )
}