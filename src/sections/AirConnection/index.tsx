import {
     SearchConnection,
     TrackList
} from './styles';
import Dropdown from '../../components/Dropdown';
import { airports } from '../../data/airports';
import { useState } from 'react';
import Button from '../../components/Button';
import connect from '../../helpers/connect';
import { PlaneTakeOff } from '@styled-icons/boxicons-solid/PlaneTakeOff';

const AirConnection = () => {

    const [starting, setStarting] = useState('');
    const [ending, setEnding] = useState('');
    const [track, setTrack] = useState<Array<string>>([]);

    const handleClick = () => {
        setTrack(connect(starting, ending));
    }

    return(
        <section>
            <h3>I want to fly...</h3>
            <SearchConnection>
                <p>from</p>
                <Dropdown data={airports} setValue={setStarting} value={starting} />
                <p>to</p>
                <Dropdown data={airports} setValue={setEnding} value={ending} />
                <Button onClick={handleClick}>fly!</Button>
            </SearchConnection>
            <p>so your track is:</p>
            <TrackList>
                {track.map((airport, index) => {
                    return airport === track[track.length - 1] ? <p key={index}>{airport}</p> : <div key={index}><p>{airport}</p><PlaneTakeOff width="1rem" height="1rem"/></div>
                })}
            </TrackList>
        </section>
    )
};

export default AirConnection;