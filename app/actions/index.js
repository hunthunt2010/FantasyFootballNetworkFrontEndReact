import api from '../apis';

const requestHelloMessage = () => ({
  //This would be extracted to a constant
  type: 'request_hello'
});

const helloMessageSuccess = (message) => ({
  type: 'hello_success',
  message
});

export const sayHello = () => dispatch => {
  //Example of an action that makes an api call and uses the result
  dispatch(requestHelloMessage());
  return api.fetchHelloMessage().then((message) => {
    dispatch(helloMessageSuccess(message));
  }).catch((error) => {
    console.log('Error with fetch', error);
  });
};