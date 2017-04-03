import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../models/User';
import {getUser} from '../../modules/user';
import { State } from '../../modules/';


import './index.css';

interface HomeStateProps {
  user: User;
}
interface HomeDispatchProps {
  getUser: typeof getUser;
}
interface HomeOwnProps {}
type HomeProps = HomeStateProps & HomeDispatchProps & HomeOwnProps;
interface HomeState {}


class Home extends Component<HomeProps, HomeState> {
  componentWillMount() {
    this.props.getUser('kissa@example.org');
  }
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          {this.props.user.email}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => ({
  user: state.user,
});

const mapDispatchToProps = { getUser };


export default connect<HomeStateProps, HomeDispatchProps, HomeOwnProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
