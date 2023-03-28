import './index.css'

const SuggestionItem = props => {
  const {suggestion, onClickSuggestion} = props

  const onClickArrow = () => {
    onClickSuggestion(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
