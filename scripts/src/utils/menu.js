export default [
    {
        text: 'Overview',
        path: '/',
        icon: 'home'
    },
    {
        text: 'Meetings',
        path: '/dashboard/meetings',
        icon: 'users',
        children: [
            {
                text: 'Add Meeting',
                path: '/dashboard/meetings/add',
                icon: 'user-plus'
            },
            {
                text: 'Edit Meeting',
                path: '/dashboard/meetings/edit',
                icon: 'pencil'
            },
            {
                text: 'Join Meeting',
                path: '/dashboard/meetings/join',
                icon: 'plus-square-o'
            }
        ]
    },
    {
        text: 'My Actions',
        path: '/dashboard/actions',
        icon: 'list-ul'
    },
    {
        text: 'Rooms',
        path: '/dashboard/rooms',
        icon: 'address-book'
    },
    {
        text: 'Calendar',
        path: '/dashboard/calendar',
        icon: 'calendar'
    }
];