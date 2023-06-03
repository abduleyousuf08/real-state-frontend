import React from 'react'

export default function unreadNotifications(notification) {
    return notification.filter((n) => n.isRead === false);
}


