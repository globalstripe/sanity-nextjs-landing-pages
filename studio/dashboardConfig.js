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
                  buildHookId: '60d64294af18371d920f68ff',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-adptkmxj',
                  apiId: '9716545e-b003-43f9-948d-04db0cf6bb0c'
                },
                {
                  buildHookId: '60d642957caae61fde4b7f91',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a8odrk5a',
                  apiId: '03ab4bfa-4b0f-4a1e-9aeb-1121ccc2560b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/globalstripe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a8odrk5a.netlify.app', category: 'apps'}
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
