import { withCallbacks, signalMiddleware, LogLevel, HttpTransportType } from 'redux-signalr';
 
const callbacks = withCallbacks();
  
export const signal = signalMiddleware({
    callbacks,
    url: 'https://gameairadavometra.azurewebsites.net/gameHub',
    logLevel: LogLevel.Debug,
    connectionOptions: { 
        skipNegotiation: true,
        transport: HttpTransportType.WebSockets
      }
})
