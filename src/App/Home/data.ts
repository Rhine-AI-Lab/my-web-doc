export const data = [
  {
    title: 'Develop',
    icon: 'outlined_code',
    selected: false,
    content: [
      {
        title: 'Develop overview',
        id: 0,
      }, {
        title: 'Android',
        oid: 0,
        content: [
          {
            title: 'MDC-Android',
            id: 1,
          }, {
            title: 'Jetpack Compose',
            id: 2,
          }
        ]
      }, {
        title: 'Flutter',
        id: 3,
      }, {
        title: 'Web',
        id: 4,
      }
    ]
  },
  {
    title: 'Foundations',
    icon: 'outlined_bookmark_border',
    selected: false,
    content: [
      {
        title: 'Foundations overview',
        id: 5,
      }, {
        title: 'Accessibility',
        id: 6,
      }, {
        title: 'Content design',
        oid: 1,
        content: [
          {
            title: 'Overview',
            id: 7,
          }, {
            title: 'Style guide',
            id: 8,
          }
        ],
      }, {
        title: 'Customizing Material',
        id: 9,
      }, {
        title: 'Design tokens',
        id: 10,
      }
    ]
  },
  {
    title: 'Styles',
    icon: 'outlined_palette',
    selected: false,
    content: [
      {
        title: 'Styles overview',
        id: 11,
      }, {
        title: 'Color',
        oid: 2,
        content: [
          {
            title: 'Overview',
            id: 12,
          },
          {
            title: 'Color system',
            id: 13,
          }, {
            title: 'Dynamic color',
            id: 14,
          }
        ]
      }, {
        title: 'Elevation',
        id: 15,
      }, {
        title: 'Icons',
        id: 16,
      }, {
        title: 'Motion',
        oid: 3,
        content: [
          {
            title: 'Overview',
            id: 17,
          }, {
            title: 'Easing and duration',
            id: 18,
          }, {
            title: 'Transitions',
            id: 19,
          }
        ]
      }, {
        title: 'Shape',
        id: 20,
      }, {
        title: 'Typography',
        id: 21,
      }
    ]
  }
]

export const articles = [
  {
    title: 'Develop',
    image: '/image/background/1.jpg',
    description: 'Implement Material Design with code and developer documentation for MDC-Android, Flutter, Jetpack Compose, and the Web.',
    content: `
    ### MDC-Android
    Material Components for Android (MDC-Android) help developers execute Material Design. Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional Android apps.
    ### Flutter
    Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.
    IMG /image/background/a1.png
    ### Jetpack Compose
    Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.
    ### Web
    Material Design for the web is the web implementation of Material Design, a visual language that synthesizes the classic principles of good design with the innovation of technology and science.
    `
  }, {
    title: 'MDC-Android',
    image: '/image/background/2.jpg',
    description: 'Material Components for Android (MDC-Android) help developers execute Material Design. Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional Android apps.',
    content: `
    ### Announcements
    Stay up to date with the latest Material Components for Android news and updates. Subscribe to our newsletter.
    `
  }, {
    title: 'Foundations',
    image: '/image/background/2.jpg',
    description: 'Learn about the principles that guide our design and development process, and get familiar with the Material Design pillars: Material Theming, Material Motion, and Material Sound.',
    content: `
    ### Accessibility
    Accessibility is a core design principle of Material Design and informs many of its components. Accessibility is what allows users of all abilities to perceive, understand, navigate, interact with, and contribute to your app.
    `
  }
]
