import {Component} from 'react'
import './index.css'

class HistoryDetails extends Component {
  render() {
    const {history, deleteHistory} = this.props
    const {timeAccessed, logoUrl, title, domainUrl} = history

    const onDelete = () => {
      deleteHistory(title)
    }

    return (
      <li className="list-container">
        <div className="sub-container">
          <p>{timeAccessed}</p>
          <div className="logo-container">
            <img src={logoUrl} alt="domain logo" />
            <p className="tittle">{title}</p>
            <p>{domainUrl}</p>
          </div>
          <button
            testid="delete"
            type="button"
            onClick={onDelete}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}
export default HistoryDetails
