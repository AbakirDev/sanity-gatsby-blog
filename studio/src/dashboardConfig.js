export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8ffb46cdf8c200b67cfa3b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-7ukkevmz',
                  apiId: 'fd1f5dfb-8a74-48ad-99e0-ea04941b3de1'
                },
                {
                  buildHookId: '5f8ffb46eaef4e014d9fdbf2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8j3axzjf',
                  apiId: 'e7a0b0f2-c0eb-4949-aa11-f1f83d82fc11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AbakirDev/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8j3axzjf.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
