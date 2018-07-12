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

  componentWillMount: function() {
    console.log("zmiana stanu")
  },

  shouldComponentUpdate(nextProps,nestState): function() {
    console.log("czy jest potrzebny render?");
    if(this.state.counter !== nextState.counter) {
      return true;
    } else {
      return false;
    }
  },

    render: function() {

      return React.createElement('div',{},
             React.createElement('p', {}, 'Licznik ' + this.state.counter),
             React.createElement('button', {onClick: this.increment}, "Dodawanie"),
             React.createElement('button', {onClick: this.decrement}, "Odejmowanie"),
           )
    },

    getDefaultProps: function() {
      console.log("props został ustawiony domyślnie")
    },


    componentWillReceiveProps(nextProps): function() {
      console.log("otrzymano nowe właściwości")
    },

    componentWillUpdate(nextProps,nestState): function() {
      console.log("render")
    },

    componentDidUpdate: function() {
      console.log("pobieranie danych")
    },


    componentDidMount: function() {
      console.log("pobieranie danych")
    },

    componentWillUnmount: function() {
      console.log("usuwamy funkcję decrement")
    },

    });

  var elements = React.createElement('div', {},
                 React.createElement(Counter),
                 React.createElement(Counter),
                 React.createElement(Counter)
  );

  ReactDOM.render(elements, document.getElementById('app'));
