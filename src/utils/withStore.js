import React, { useContext } from 'react';
import { GlobalContext } from '../Store/store';

function withStore(Component) {
  return function WrappedComponent(props) {
    const [state] = useContext(GlobalContext);
    return <Component {...props} state={state} />;
  }
}

export default withStore;
