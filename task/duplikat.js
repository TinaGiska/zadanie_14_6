var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    decrement: function() {
       this.setState({
           counter: this.state.counter - 1
       });
   },

    render: function() {
        return React.createElement('div', {onClick: this.decrement},
               React.createElement('span', {}, 'Licznik ' + this.state.counter),
               React.createElement('button', {type: 'submit'}, "Odejmowanie")
        );
    }
});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('subtract'));
