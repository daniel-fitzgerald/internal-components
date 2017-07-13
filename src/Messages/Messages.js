import React from 'react'

function getClassName(info, warning, success, error) {
  if (info) {
    return 'uikit-page-alerts'
  } else if (warning) {
    return 'uikit-page-alerts uikit-page-alerts--warning'
  } else if (success) {
    return 'uikit-page-alerts uikit-page-alerts--success'
  } else if (error) {
    return 'uikit-page-alerts uikit-page-alerts--error'
  }
}

function Messages({ info, warning, success, error }) {
  const message = info || warning || error || success
  if (!message) {
    return null
  } else {
    return <div className={getClassName(info, warning, success, error)} role="alert">{message}</div>
  }
}

export default Messages