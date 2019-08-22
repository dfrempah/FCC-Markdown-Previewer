import React from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  }

class Preview  extends React.Component{  
    render(){
        return(
            <div className="previewContainer">
                <div className="previewHeader" ><h1>Preview</h1></div>
               
            <div dangerouslySetInnerHTML={{__html: marked(this.props.message, {renderer: renderer})}}></div>
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
  
  export default connect(mapStateToProps,mapDispatchToProps)(Preview);