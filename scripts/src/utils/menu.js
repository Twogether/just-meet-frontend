export default [
    {
        text: 'Dashboard',
        path: '/dashboard',
        icon: 'home'
    },
    {
        text: 'Meetings',
        path: '/meetings',
        icon: 'users',
        children: [
            {
                text: 'Add Meeting',
                path: '/meetings/add',
                icon: 'user-plus'
            },
            {
                text: 'Edit Meeting',
                path: '/meetings/edit',
                icon: 'pencil'
            },
            {
                text: 'Join Meeting',
                path: '/meetings/join',
                icon: 'plus-square-o'
            }
        ]
    },
    {
        text: 'My Actions',
        path: '/actions',
        icon: 'list-ul'
    },
    {
        text: 'Rooms',
        path: '/rooms',
        icon: 'address-book'
    },
    {
        text: 'Calendar',
        path: '/calendar',
        icon: 'calendar'
    }
];