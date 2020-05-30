import { withCallbacks, signalMiddleware, LogLevel, HttpTransportType } from 'redux-signalr';
import { Dispatch } from '../types';
import { Players, PlayerId } from '../../types/player';
import { gameFsa } from '../modules/game';

const callbacks = withCallbacks()
    .add('SetNewGamer', (name: string, id: PlayerId) => (dispatch: Dispatch) => {
        console.log('SetNewGamer', name, id);
        // All except client
        dispatch(gameFsa.addPlayer({ name, id }));
    })
    .add('SetAllGamers', (id: PlayerId, players: Players) => (dispatch: Dispatch) => {
        console.log('SetAllGamers', id, players);
        // Client
        dispatch(gameFsa.setPlayers(players));
    })

export const signal = signalMiddleware({
    callbacks,
    url: 'https://gameairadavometra.azurewebsites.net/gameHub',
    logLevel: LogLevel.Debug,
    connectionOptions: {
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
    }
})
