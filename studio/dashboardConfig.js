export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5e2b706a9e1e4891a84ee46b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-studio-tso44suu',
                  apiId: 'd251dda6-a6c1-4849-90e2-10e743227de1'
                },
                {
                  buildHookId: '5e2b706be3b7299713f67492',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-web-kb15hc2i',
                  apiId: '8e7625f5-c0a5-4ba8-9ba0-06dd7d52ee0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/apkoponen/sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-web-kb15hc2i.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
