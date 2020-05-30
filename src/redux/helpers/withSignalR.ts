import { withCallbacks, signalMiddleware, LogLevel, HttpTransportType } from 'redux-signalr';
import { Dispatch } from '../types';
import { Players, PlayerId } from '../../types/player';
import { gameFsa, updateHand } from '../modules/game';
import { cards } from '../../stories/data';
import { connectionFsa } from '../modules/connection';
import { createPlayer } from '../../utils/player';

const callbacks = withCallbacks()
    .add('SetNewGamer', (name: string, id: PlayerId) => (dispatch: Dispatch) => {
        console.log('SetNewGamer', name, id);
        // All except client
        dispatch(gameFsa.addPlayer(createPlayer(id, name)));
    })
    .add('SetAllGamers', (id: PlayerId, players: Players) => (dispatch: Dispatch) => {
        console.log('SetAllGamers', id, players);
        // Client
        dispatch(connectionFsa.setClientId(id));
        const newPlayers = players.map(({ id, name }) => createPlayer(id, name))
        dispatch(gameFsa.setPlayers(newPlayers));
        dispatch(updateHand(cards)) // TODO: Use cards from server
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
