import React from 'react'
import '../styles/notification.css'

const Notification = ({notificationMessage}) => {
    if (notificationMessage === null) {
        return null
    }

    const style = notificationMessage.includes('Added') ? 'successMessage' : 'errorMessage'

    return (
        <div className={style}>
            {notificationMessage}
        </div>
    )
}

export default Notification