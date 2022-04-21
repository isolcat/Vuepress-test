module.exports = {
    themeConfig: {
        sidebar: 'auto',
        logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}