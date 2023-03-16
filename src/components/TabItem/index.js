import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const ActiveTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTab = () => {
    updatedTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${ActiveTabClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
