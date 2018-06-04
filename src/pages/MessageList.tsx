import * as React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getMessageList } from './../actions/message'
import { MessageListItem } from './../reducers/message'

import { Link } from 'react-router-dom'
import './../styles/list.css'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps>
type ListContainerProps = StateProps & DispatchProps

class List extends React.Component<ListContainerProps> {
  public componentDidMount() {
    this.props.getMessageList()
  }
  public render() {
    return (
      <div className={'App-container'}>
        <Helmet>
          <title>List Title</title>
        </Helmet>
        <ul className="list">
          {this.props.messageList.map((v: MessageListItem, idx: number) => {
            return (
              <li key={`list-${v.id}`}>
                <Link to={`/message/${v.id}`}>
                  <div>id : {v.id}</div>
                  <div>userId : {v.userId}</div>
                  <div>title : {v.title}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    messageList: state.message.messageList.list
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getMessageList: () => dispatch(getMessageList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
