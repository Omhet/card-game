import { withCallbacks, signalMiddleware, LogLevel } from 'redux-signalr';
 
const callbacks = withCallbacks();
  
export const signal = signalMiddleware({
    callbacks,
    url: '#',
    logLevel: LogLevel.Debug,
})
