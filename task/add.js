var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 10
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

    componentWillReceiveProps () {
      decrement: function() {
         this.setState({
             counter: this.state.counter - 5
         });
     },
    }
    console.log(componentWillReceiveProps);

    shouldComponentUpdate();
    console.log();

    componentWillUnmount();
    console.log();

});

var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('add'));


componentWillReceiveProps();

shouldComponentUpdate()

componentWillUnmount()
