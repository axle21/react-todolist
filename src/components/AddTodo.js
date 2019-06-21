import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class addTodo extends Component {

    state =  {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add To Do ..." style={{flex: '10'}} value={this.state.title} onChange={this.onChange}/>
                <input type="submit" value="submit" className="btn" style={{flex:'1', padding:'5px'}}/>
            </form>
        )
    }
}

//Proptypes
    addTodo.propTypes ={
    addTodo: PropTypes.func.isRequired

}

export default addTodo
