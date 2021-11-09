export const loginRequest = (data, callbackFunction) => {
  return (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB1pNcvHYXLCSJWpGr55jv2P5eQsLTGWJY',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({
            email: data.userName,
            password: data.password,
            returnSecureToken: true,
          }),
        }
      );
      const apiData = await response.json();
      if (response.ok) {
        localStorage.setItem('token', apiData.idToken);
        console.log(apiData.idToken);
        if(callbackFunction){
          callbackFunction()
        }
      }
    };

    sendRequest().catch((error) => {
      console.log(error)
    });
  };
};
