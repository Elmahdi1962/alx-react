import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Footer(props) {
  const user = props.user;

  return (
    <div className="App-footer">
      {user.isLoggedIn && <p><a href="#">Contact us</a></p>}
      <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
    </div>
  )
}

export function mapStateToProps(state) {
  return {
    user: state.get('user')
  };
}

export default connect(mapStateToProps)(Footer);