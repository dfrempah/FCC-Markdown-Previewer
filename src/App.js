import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import MarkDownBox from './components /MarkDownBox';
import Preview from './components /Preview';

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <MarkDownBox />
        <Preview />
      </div>
       
    )
  }
}

const mapStateToProps = (state) => {
  return{
    message: state.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    onChangeText: () => dispatch({type: 'onChangeText'} ),
    justChange: () => dispatch({type: 'justChange', new: 'new'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
