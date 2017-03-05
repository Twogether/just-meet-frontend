export default [
    {
        text: 'Dashboard',
        path: '/dashboard',
        icon: 'calendar'
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
            // {
            //     text: 'Edit Meeting',
            //     path: '/meetings/edit',
            //     icon: 'pencil'
            // },
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
    }
];