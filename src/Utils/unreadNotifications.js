import React from 'react'

function unreadNotifications(notification) {
    return notification.filter((n)=> n.isRead === false)
}

export default unreadNotifications
