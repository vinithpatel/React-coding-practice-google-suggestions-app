import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {
    searchText: '',
  }

  onClickSuggestion = suggestion => {
    this.setState({searchText: suggestion})
  }

  onChangeValue = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchText} = this.state

    const filteredSuggetionList = suggestionsList.filter(eachSuggestion => {
      const suggestion = eachSuggestion.suggestion.toLowerCase()
      return suggestion.includes(searchText.toLowerCase())
    })

    return (
      <div className="bg-container">
        <div className="info-container">
          <img
            className="google-image"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />
          <div className="search-container">
            <div className="input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="search-input"
                type="search"
                placeholder="Search Google"
                value={searchText}
                onChange={this.onChangeValue}
              />
            </div>
            <ul className="suggestion-list">
              {filteredSuggetionList.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestion={eachSuggestion.suggestion}
                  onClickSuggestion={this.onClickSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
