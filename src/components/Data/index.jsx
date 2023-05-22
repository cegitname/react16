import React, {Component} from 'react'

class Data extends Component {
  constructor () {
    super()
  }

  state = {
    form: {
      name: 'lisi',
      sex:'',
      love: []
    }
  }

  change =(e)=>{
    console.log(e.target.value)
    this.setState({
      form: Object.assign(this.state.form, {name:e.target.value})
    })
  }
  render() {
    const {name } = this.state.form
    return <div >
      受控组件
      <ul onChange={this.change}>
        <li>
          <label htmlFor="">姓名</label>
          <input type="text" value={name}/>
        </li>
      </ul>
    </div>
  }
}

export default Data