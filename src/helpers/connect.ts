import { connections } from '../data/airports';

const connect = (starting: string, ending: string) => {
    if(!starting || !ending) {
        return ['Enter airports first, then fly.'];
    } else if(starting === ending) {
        return ['You are already here...'];
    }
    let airports = connections.filter(connection => connection.includes(starting)).map(connection => connection[0] === starting ? [connection[0]] : [connection[1]]);
    let connectionsLeft = connections;
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
                    return arrayToAdd;
                }
                newAirports.push(arrayToAdd);
            }
        }
        airports = newAirports;
    } while(!!connectionsLeft.length);
    return ['Sorry, there is no connection between this airports.'];
};

export default connect;
