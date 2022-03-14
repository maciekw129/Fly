import { connections } from '../data/airports';

const connect = (starting: string, ending: string) => {
    let airports = connections.filter(connection => connection.includes(starting)).map(connection => connection[0] === starting ? [connection[1]] : [connection[0]]);
    let connectionsLeft = connections.filter(connection => !connection.includes(starting));

    do {
        let newAirports = [];
        for(let i = 0; i<=airports.length-1; i++) {
            let airportsConnection = airports[i];
            let airport = airports[i][airports[i].length-1];
            const toAdd = connectionsLeft.filter(connection => connection.includes(airport)).map(connection => connection[0] === airport ? connection[1] : connection[0]);
            connectionsLeft = connectionsLeft.filter(connection => !connection.includes(airport));
            for(let y=0; y<=toAdd.length -1; y++) {
                let arrayToAdd = [...airportsConnection, toAdd[y]];
                if(arrayToAdd[arrayToAdd.length-1] === ending) {
                    return [starting, ...arrayToAdd];
                }
                newAirports.push(arrayToAdd);
            }
        }
        airports = newAirports;
    } while(!!connectionsLeft.length);

    return null;
};

export default connect;