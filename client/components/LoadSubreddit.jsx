import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

// const LoadSubreddit = ({dispatch}) => (
//   <button onClick={() => dispatch(fetchPosts('newzealand'))}>
//     Fetch Posts
//   </button>
// )

class LoadSubreddit extends React.Component {
  constructor () {
    super()

    this.state = {
      topic: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getPosts (topic) {
    this.props.dispatch(fetchPosts(topic))
    this.setState({
      topic: ''
    })
  }

  render () {
    return (
      <div>
        <p><input placeholder='Enter topic' name='topic' onChange={this.handleChange} value={this.state.topic}/></p>
        <button onClick={() => this.getPosts(this.state.topic)}>
    Fetch Posts
        </button>
      </div>
    )
  }
}

export default connect()(LoadSubreddit)
