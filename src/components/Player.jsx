import {useState} from 'react';

export default function Player({name = 'Player', symbol, isActive, onNameChange}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    const [editedName, setEditedName] = useState(name);

    const handleChange = (event) => {
        if (isEditing) setEditedName(event.target.value);
    }

    const handleClick = () => {
        if (isEditing) {
            setPlayerName(editedName);
            onNameChange(symbol, editedName);
        }
        setIsEditing((editing) => !editing);
    }

   return (
       <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ?
                    <input type="text" value={editedName} onChange={handleChange}/> :
                    <span className="player-name">{playerName}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
           <button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>
   )
}