import {Component} from 'react'
import HistoryDetails from '../HistoryDetails'
import './index.css'

class BrowsingBar extends Component {
  state = {
    isSearch: '',
    finalResults: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({finalResults: initialHistoryList})
  }

  filteredHistoryDetails = () => {
    const {isSearch, finalResults} = this.state
    const updateData = finalResults.filter(eachUser =>
      eachUser.title.includes(isSearch),
    )
    return updateData
  }

  historyDetails = event => {
    const {isSearch} = this.state
    this.setState({
      isSearch: event.target.value,
    })
    console.log(isSearch)
  }

  onDeleteHistory = value => {
    const {finalResults} = this.state
    const filteredData = finalResults.filter(
      eachUser => eachUser.title !== value,
    )
    this.setState({
      finalResults: filteredData,
    })
  }

  render() {
    const searchResults = this.filteredHistoryDetails()
    return (
      <div className="main-container">
        <div className="bar-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="icon"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.historyDetails}
              className="input-icon"
              placeholder="Search history"
            />
          </div>
        </div>
        {searchResults.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="unordered-list">
            {searchResults.map(eachHistory => (
              <HistoryDetails
                history={eachHistory}
                key={eachHistory.id}
                deleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default BrowsingBar
