import {
     SearchConnection,
     TrackList
} from './styles';
import Dropdown from '../../components/Dropdown';
import { airports } from '../../data/airports';
import { useState } from 'react';
import Button from '../../components/Button';
import connect from '../../helpers/connect';

const AirConnection = () => {

    const [starting, setStarting] = useState('');
    const [ending, setEnding] = useState('');
    const [track, setTrack] = useState<Array<string> | null>([]);

    const handleClick = () => {
        console.log(connect(starting, 'XXX'));
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
            <TrackList>
                {track ?
                track.map(airport => <p>{airport}</p>)
                : <p>Sorry, there is no connection between this airports.</p>
                }
            </TrackList>
        </section>
    )
};

export default AirConnection;