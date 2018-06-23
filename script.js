var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
       this.setState({
           counter: this.state.counter + 1
       });
   },

   decrement: function() {
      this.setState({
          counter: this.state.counter - 1
      });
  },

    render: function() {

      return React.createElement('div',{},
             React.createElement('p', {}, 'Licznik ' + this.state.counter),
             React.createElement('button', {onClick: this.increment}, "Dodawanie"),
             React.createElement('button', {onClick: this.decrement}, "Odejmowanie"),
           )
    }
});

var element = React.createElement(Counter);
var element2 = React.createElement(Counter);
var element3 = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
