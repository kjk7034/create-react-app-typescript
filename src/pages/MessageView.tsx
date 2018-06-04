import * as React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { getMessageView } from './../actions/message'
import { MessageView } from './../reducers/message'

type StateProps = ReturnType<typeof mapStateToProps>
type DispatchProps = ReturnType<typeof mapDispatchToProps> & {
  match: {
    params: {
      id: number
    }
  }
  history: {
    action: string
  }
  data?: MessageView
}
type ViewContainerProps = StateProps & DispatchProps

class View extends React.Component<ViewContainerProps> {
  public componentDidMount() {
    const { history, data, match } = this.props
    if (history.action === 'PUSH' || (history.action === 'POP' && !data)) {
      this.props.getMessageView(match.params.id)
    }
  }
  public render() {
    if (!this.props.data) {
      return <div className={'App-container'} />
    }
    const { title, body, id } = this.props.data
    return (
      <div className={'App-container'}>
        <Helmet>
          <title>View Title</title>
        </Helmet>
        <section>
          <h1>{title}</h1>
          <span>글 번호 : {id}</span>
          <p>{body}</p>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state: any) {
  return {
    data: state.message.messageView
  }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    getMessageView: (idx: number) => dispatch(getMessageView(idx))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
