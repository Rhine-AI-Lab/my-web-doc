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
    # MDC-Android
    Material Components for Android (MDC-Android) help developers execute Material Design. Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional Android apps.
    # Flutter
    Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.
    IMG /image/background/a1.png
    # Jetpack Compose
    Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.
    ### Web
    Material Design for the web is the web implementation of Material Design, a visual language that synthesizes the classic principles of good design with the innovation of technology and science.
    `
  }, {
    title: 'MDC-Android',
    image: '/image/background/2.jpg',
    description: 'Material Components for Android (MDC-Android) help developers execute Material Design. Developed by a core team of engineers and UX designers at Google, these components enable a reliable development workflow to build beautiful and functional Android apps.',
    content: `
    # Announcements
    Stay up to date with the latest Material Components for Android news and updates. Subscribe to our newsletter.
    # Resources & documentation
    ### 1. Material Components – Github
    Documentation for all Material Components available in the MDC-Android repo on Github. This includes components that are not yet officially released. For the latest stable release, see the documentation for the Material Design Components library.
    ### 2. ADS ‘21: What’s new in Material
    Learn about the latest Material Design updates and how to use them in your apps. This session covers the latest Material Design components, including Material You, Material Motion, and Material Theming.
    `
  }, {
    title: 'Jetpack Compose',
    image: '/image/background/3.png',
    description: 'Jetpack Compose is Android’s modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.',
    content: `
    `
  }, {
    title: 'Flutter',
    image: '/image/background/4.jpg',
    description: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Flutter works with existing code, is used by developers and organizations around the world, and is free and open source.',
    content: `
    `
  }, {
    title: 'Web',
    image: '/image/background/5.jpg',
    description: 'Material Design for the web is the web implementation of Material Design, a visual language that synthesizes the classic principles of good design with the innovation of technology and science.',
    content: `
    `
  }, {
    title: 'Foundations Overview',
    image: '/image/background/6.jpg',
    description: 'Foundations inform the basis of any great user interface, from accessibility standards to essential patterns for layout and interaction.',
    content: `
    `
  }, {
    title: 'Accessibility',
    image: '/image/background/7.png',
    description: 'Learn how to make your app more accessible to users with disabilities. Get guidance on how to implement Material Design components and patterns to make your app accessible.',
    content: `
    `
  }, {
    title: 'Content Design Overview',
    image: '/image/background/8.jpg',
    description: 'UX writing and information design make UIs easy to use',
    content: `
    `
  }, {
    title: 'Style guide',
    image: '/image/background/9.png',
    description: 'Learn how to write and design content for users. Get guidance on voice, style, and tone to make your content clear, concise, and consistent.',
    content: `
    `
  }, {
    title: 'Customizing Material',
    image: '/image/background/10.png',
    description: 'Customize Material Design to reflect your product’s brand. Get guidance and examples for using Material Theming to create a branded look and feel for your product.',
    content: `
    `
  }, {
    title: 'Design tokens',
    image: '/image/background/11.jpg',
    description: 'Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.',
    content: `
    `
  }, {
    title: 'Styles Overview',
    image: '/image/background/12.png',
    description: 'Styles are a powerful way to standardize your app’s design, size, and color. Learn how to use styles to create a consistent user experience across your app.',
    content: `
    `
  }, {
    title: 'Color Overview',
    image: '/image/background/13.jpg',
    description: 'Color is a powerful tool for creating visual interest and drawing attention to specific parts of your app. Learn how to use color to create a more usable and visually interesting app.',
    content: `
    `
  }, {
    title: 'Color system',
    image: '/image/background/14.jpg',
    description: 'The Material Design color system helps you apply color to your UI in a meaningful way. In this system, you select a primary and a secondary color to represent your brand. Dark and light variants of each color can then be applied to your UI in different ways.',
    content: `
    `
  }, {
    title: 'Dynamic color',
    image: '/image/background/15.png',
    description: 'Dynamic color is a color that is applied programmatically to indicate interactivity and state.',
    content: `
    `
  }, {
    title: 'Elevation',
    image: '/image/background/1.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Icons',
    image: '/image/background/2.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Motion Overview',
    image: '/image/background/3.png',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Easing and duration',
    image: '/image/background/4.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Transitions',
    image: '/image/background/5.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Shape',
    image: '/image/background/6.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }, {
    title: 'Typography',
    image: '/image/background/8.jpg',
    description: 'Elevation is the relative distance between two surfaces along the z-axis. It determines the appearance of objects, shadows, and depth.',
    content: `
    `
  }
]
