import Dropdown from '../../components/Dropdown';
import { airports } from '../../data/airports';
import { useState } from 'react';
import Button from '../../components/Button';
import connect from '../../helpers/connect';

const AirConnection = () => {

    const [starting, setStarting] = useState('');
    const [ending, setEnding] = useState('');

    const handleClick = () => {
        console.log(connect(starting, 'XXX'));
    }


    return(
        <section>
                <p>from</p>
                <Dropdown data={airports} setValue={setStarting} value={starting} />
                <p>to</p>
                <Dropdown data={airports} setValue={setEnding} value={ending} />
                <Button onClick={handleClick}>search!</Button>
        </section>
    )
};

export default AirConnection;