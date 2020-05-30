import { withCallbacks, signalMiddleware, LogLevel, HttpTransportType } from 'redux-signalr';
import { Dispatch } from '../types';
import { Players, PlayerId } from '../../types/player';
import { gameFsa } from '../modules/game';
import { cards } from '../../stories/data';

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
        dispatch(gameFsa.setHand(cards)) // TODO: Use cards from server
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
