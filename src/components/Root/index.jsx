import React,{Component} from "react";
class Root extends Component {
  constructor(props) {
    super(props)
    console.log(props,'constructor')
    this.state = {
      names: this.props.names
    }
  }
  componentWillMount() {
    console.log('component will mount')
  }
  componentDidMount() {
    console.log('component did mount')
  }
  shouldComponentUpdate(nextProps,nextState) {
    console.log(nextProps, nextState,'nnnnnnnnn')
    return false
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    // props statenext
    console.log(nextProps, 'nextProps in componentWillReceiveProps')
    this.setState({
      names:nextProps.names 
    })
  }
  
  render() {
    const names = this.state.names
    console.log('component render')
    return <div> hello, this is root {names}
    </div>
  }
}

export default Root