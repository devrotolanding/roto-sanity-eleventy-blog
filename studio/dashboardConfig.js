export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '624eb09d19a57459e250603f',
                  title: 'Sanity Studio',
                  name: 'roto-sanity-eleventy-blog-studio',
                  apiId: 'bdc2f8b2-a431-4315-a35f-9459f469aa84'
                },
                {
                  buildHookId: '624eb09dab07ee5782177b44',
                  title: 'Blog Website',
                  name: 'roto-sanity-eleventy-blog',
                  apiId: '76967480-c152-4379-a499-d26e0dbfd0a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devrotolanding/roto-sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://roto-sanity-eleventy-blog.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
