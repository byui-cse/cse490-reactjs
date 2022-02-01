/*
Example App.css:

.authButton {           .authDialog {                       .authDialog div {
  position: absolute;     position: fixed;                    padding: 20px;
  top: 10px;              top: 0;                             background-color: white;
  right: 50px;            bottom: 0;                          display: flex;
  width: 100px;           left: 0;                            flex-direction: column;
  height: 50px;           right: 0;                         }
  font-size: 15px;        background: rgba(0, 0, 0, 0.7);
}                         transition: opacity 500ms;
                          visibility: hidden;
                          opacity: 0;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        }
*/

import { useEasybase, Auth } from 'easybase-react';
import { React, useState } from 'react';
import './style.css';

function MyAuth({ children }) {
  const { isUserSignedIn, signIn, signOut, signUp } = useEasybase();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const onAuthButtonClick = () => {
    if (isUserSignedIn()) {
      signOut();
    } else {
      setDialogOpen(true);
    }
  };

  const onSignInClick = async () => {
    const res = await signIn(usernameValue, passwordValue);
    if (res.success) {
      setDialogOpen(false);
      setUsernameValue('');
      setPasswordValue('');
    }
  };

  const onSignUpClick = async () => {
    const res = await signUp(usernameValue, passwordValue);
    if (res.success) {
      await signIn(usernameValue, passwordValue);
      setDialogOpen('');
      setUsernameValue('');
      setPasswordValue('');
    }
  };

  if (isUserSignedIn()) {
    return (
      <>
        <button onClick={onAuthButtonClick} className='authButton'>
          Sign Out
        </button>
        {children}
      </>
    );
  } else
    return (
      <>
        <button onClick={onAuthButtonClick} className='authButton'>
          Sign In
        </button>
        <div
          className='authDialog'
          style={dialogOpen ? { opacity: 1, visibility: 'visible' } : {}}>
          <div>
            <input
              type='text'
              placeholder='Username'
              value={usernameValue}
              onChange={(e) => setUsernameValue(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <div>
              <button onClick={onSignInClick}>Sign In</button>
              <button onClick={onSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default MyAuth;
