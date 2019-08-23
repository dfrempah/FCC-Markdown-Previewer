import React from 'react';
import { connect } from 'react-redux';

class MarkDownBox extends React.Component{
    render(){
        return(
            <div className="markedContainer">
                <div className="markedHeader" ><h1>Raw Mark Down</h1></div>
                <textarea name="markdownarea" id="editor" value={this.props.message} onChange={this.props.onChangeText}></textarea>
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
      onChangeText: (event) => dispatch({type: 'ON_CHANGE_TEXT',payload: event.target.value} ),
      justChange: () => dispatch({type: 'justChange', new: 'new'})
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(MarkDownBox);
  