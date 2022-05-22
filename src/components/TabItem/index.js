import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
