import React, { Component } from "react";

class Counter extends Component {
    // state = { 
    //     value: this.props.counter.value,
    //     // tags: []
    // };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this); //return a new instance of the handle increment function
    // }

    // handleIncrement = (product) => {
    //     // console.log(product)
    //     this.setState({value: this.state.value + 1})
    // }

    styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    };

    renderTags() {
        if(this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map( tag => <li key={tag}> {tag} </li>)}</ul>;
    }

    render() {
        console.log('props', this.props)

        return (
            <div>
                <span style={ this.styles } className={this.getBadgeClasses()}>{this.formatCount()}</span> 
                {/* m-2 means margin:2 */}
                <button 
                onClick={ () => this.props.onIncrement(this.props.counter) } 
                className="btn btn-secondary btn-sm">
                    Increment
                </button>
                <button 
                className="btn btn-danger btn-sm m-2"
                onClick={ () => this.props.onDelete(this.props.counter.id) } //onDelete method is from counters.js
                >
                    Delete
                </button>
                {/* { this.state.tags.length === 0 && 'Please create a new tag!' } */}
                {/* {this.renderTags()} */}
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;
