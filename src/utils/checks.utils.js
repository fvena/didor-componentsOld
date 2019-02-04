/**
 * Check state of connection
 *
 * @return {Boolean} - State of internet connection
 */
const checkIsConnected = () => {
  let stateConnection;

  if (navigator.connection && navigator.connection.type) {
    // Is a app movile with cordova
    const network = navigator.connection.type;
    stateConnection = network !== Connection.NONE; // eslint-disable-line
  } else {
    // Is a web apps
    stateConnection = navigator.onLine;
  }

  console.log('Is the app online? ', stateConnection);
  return stateConnection;
};

export default {
  checkIsConnected,
};
