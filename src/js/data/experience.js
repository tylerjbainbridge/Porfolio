const experience = [
    {
        name: 'Rakuten',
        title: 'Software Engineering Intern',
        url: 'http://www.rakuten.com',
        start: {
            month: 'May',
            year: 2016
        },
        end: {
            month: 'August',
            year: 2016
        },
        short: `
            I worked on the Rakuten Crawler Project (RCP) along with a team of seven other engineers. The RCP 
            is a large scale and undetectable web crawler which was built to reduce the need for 3rd party services.
        `,
        learned: [
            `
            How to collaborate efficiently with team members using GIT, Jira, Slack, and more. 
            `,
            `
            How to use request headers to learn about the device making the request.
            `,
        ],
        challenges: [
            `
            Adapting to make meaningful contributions as an intern on an experienced team of engineers
            working on a large and intricate project.
            `
        ],
        skills: [
            'Javascript',
            'Node',
            'Express',
            'Lodash',
            'MongoDB',
            'Docker'
        ],
        projects: [
            {
                name: 'NDJSON to MongoDB',
                description: `
                    Wrote a tool to parse a file of millions new line delimited JSON objects and store them
                    in a data store.
                `,
                notableFeatures: [
                    'Used pipes and MongoDB bulk insert',
                    'Bluebird Promises',
                    'OOP Javascript'
                ],
            },
            {
                name: 'CSV Comparison Tool',
                description: `
                    Developed a configurable CSV comparison tool to be used via command line or node module.
                `,
                notableFeatures: [
                    'JSON Configuration.',
                    'Bluebird Promises.',
                    'Compare certain columns and ignore others (date, ID, etc.).',
                    'Compare by line or by a certain unique header (ID, name, etc.).'
                ],
                use: `Test an 'actual' CSV against 'expected' CSV and see the differences.`
            },
            {
                name: 'Mock Website',
                description: `
                    Created a mock website which replicated the websites we intended to crawl. Users send a POST 
                    request containing a JSON configuration. The JSON config changed the server behavior e.g. (respond
                    with a 404 for this url, block an IP after "n" requests, save request headers in MongoDB, etc.)
                `,
                notableFeatures: [
                    'JSON Configuration via POST request.',
                    'Change server response for a certain route or routes.',
                    'Block an IP after n requests or serve a certain page.',
                    'Save requests headers in MongoDB with a session ID.',
                    'View all request headers from a certain session (via session ID).'
                ],
                use: `
                    Test the web crawler, proxies, etc. on the mock version
                    of the website with various different scenarios.
                `
            }
        ]
    },
    {
        name: 'HigherMe',
        title: 'Software Engineering Intern',
        url: 'http://www.higherme.com',
        start: {
          month: 'September',
          year: 2016
        },
        start: {
          month: 'March',
          year: 2017
        },
        short: `
           I work remotely/part-time with a small team and make large contributions 
           at a YCombinator backed startup. I'm responsible for several large projects that are being 
           used by thousands of users everyday on the production website.
        `,
        learned: [
            `How to create efficient and reusable components. `,
            `The power of higher order components.`,
            `How to use state management tools for better debugging and server interaction.`,
            `How to distribute time between school and work.`,
        ],
        challenges: [
            `
            Quickly writing and testing code for a growing startup 
            while maintaining good programming standards. 
            `
        ],
        skills: [
            'Javascript',
            'React',
            'Alt',
            'Axios',
            'Lodash',
            'HTML',
            'JSX',
            'CSS',
            'SCSS',
            'Webpack'
        ],
        projects: [
            {
                name: 'Authentication',
                description: `
                    Developed a Login/Signup/Forgot Password single page interface with React and Alt.
                `,
                notableFeatures: [
                    'Single page.',
                    'Error handling.',
                    'Parent auth container.',
                    'Alt stores and actions.'
                ],
            },
            {
                name: 'Profile',
                description: `
                    Creating the user profile in React from scratch to replace the Backbone/JQuery version.
                `,
                notableFeatures: [
                    'Reusable Google Places API modal for adding education and experience.',
                    'Using Alt source to fetch original data.',
                    'Use of higher order components.',
                    'Clean validation.',
                    'Error handling.'
                ]
            },
            {
                name: 'Mock Website',
                description: `
                    Created a mock website which replicated the websites we intended to crawl. Users send a POST 
                    request containing a JSON configuration. The JSON config changed the server behavior e.g. (respond
                    with a 404 for this url, block an IP after "n" requests, save request headers in MongoDB, etc.)
                `,
                notableFeatures: [
                    'JSON Configuration via POST request.',
                    'Change server response for a certain route or routes',
                    'Block an IP after n requests or serve a certain page.',
                    'Save requests headers in MongoDB with a session ID',
                    'View all request headers from a certain session (via session ID)'
                ],
                use: `
                    Test the web crawler, proxies, etc. on the mock version
                    of the website with various different scenarios.
                `
            }
        ]
    }
];

export default experience;