import type { MuiPage } from '@mui/monorepo/docs/src/MuiPage';
import componentsManifest from './toolpad/reference/components/manifest.json';

const pages: MuiPage[] = [
  {
    pathname: '/toolpad/getting-started',
    children: [
      { pathname: '/toolpad/getting-started/overview' },
      { pathname: '/toolpad/getting-started/installation' },
      { pathname: '/toolpad/getting-started/first-app', title: 'Build your first app' },
      {
        pathname: '/toolpad/examples-group',
        title: 'Examples',
        children: [
          { pathname: '/toolpad/examples', title: 'Overview' },
          { pathname: '/toolpad/examples/npm-stats', title: 'npm stats' },
          { pathname: '/toolpad/examples/basic-crud-app', title: 'Basic CRUD application' },
          { pathname: '/toolpad/examples/qr-generator', title: 'QR Code generator' },
        ],
      },
      { pathname: '/toolpad/getting-started/roadmap' },
    ],
  },
  {
    pathname: '/toolpad/concepts',
    children: [
      {
        pathname: '/toolpad/concepts/building-ui',
        title: 'Building UI',
      },
      {
        pathname: '/toolpad/concepts/queries-',
        title: 'Queries',
        children: [
          {
            pathname: '/toolpad/concepts/queries',
            title: 'Overview',
          },
          {
            pathname: '/toolpad/concepts/http-requests',
            title: 'HTTP requests',
          },
          {
            pathname: '/toolpad/concepts/custom-functions',
            title: 'Custom functions',
          },
        ],
      },
      {
        pathname: '/toolpad/concepts/managing-state',
        title: 'Managing state',
      },
      {
        pathname: '/toolpad/concepts/deployment',
      },
      {
        pathname: '/toolpad/concepts/custom-components',
      },
      {
        pathname: '/toolpad/concepts/theming',
      },
      {
        pathname: '/toolpad/concepts/display-mode',
      },
    ],
  },
  {
    pathname: '/toolpad/how-to-guides',
    title: 'How-to guides',
    children: [
      {
        pathname: '/toolpad/how-to-guides/connect-to-datasource',
        subheader: 'Connect to datasource',
        children: [
          {
            pathname: '/toolpad/how-to-guides/connect-to-databases',
            title: 'MySQL',
          },
          {
            pathname: '/toolpad/how-to-guides/connect-to-googlesheets',
            title: 'Google Sheets',
          },
        ],
      },
      {
        pathname: '/toolpad/how-to-guides/deployment',
        subheader: 'Deployment',
        children: [
          {
            pathname: '/toolpad/how-to-guides/render-deploy',
            title: 'Deploy your app to Render',
          },
        ],
      },
      {
        pathname: '/toolpad/how-to-guides/custom-components',
        subheader: 'Create custom components',
        children: [
          {
            pathname: '/toolpad/how-to-guides/map-display',
            title: 'Map component',
          },
          {
            pathname: '/toolpad/how-to-guides/cube-component',
            title: '3D cube component',
          },
        ],
      },
      {
        pathname: '/toolpad/how-to-guides/misc',
        subheader: 'Miscellaneous',
        children: [
          {
            pathname: '/toolpad/how-to-guides/customize-datagrid',
            title: 'Customize data grids',
          },
          {
            pathname: '/toolpad/how-to-guides/delete-datagrid-row',
            title: 'Delete a data grid row',
          },
          {
            pathname: '/toolpad/how-to-guides/embed-pages',
            title: 'Embed a Toolpad page',
          },
          {
            pathname: '/toolpad/how-to-guides/basic-auth',
            title: 'Enable basic auth',
          },
          {
            pathname: '/toolpad/how-to-guides/editor-path',
            title: 'Troubleshoot missing editor',
          },
        ],
      },
    ],
  },
  {
    pathname: '/toolpad/reference-group',
    title: 'Reference',
    children: [
      {
        pathname: '/toolpad/reference/file-schema',
        title: 'File schema',
      },
      {
        pathname: '/toolpad/reference/components-group',
        title: 'Components',
        children: componentsManifest.pages,
      },
      {
        pathname: '/toolpad/reference/api-group',
        title: 'API',
        children: [
          {
            pathname: '/toolpad/reference/api',
            title: 'Index',
          },
          {
            pathname: '/toolpad/reference/api/functions-group',
            subheader: 'Functions',
            children: [
              {
                title: 'createFunction',
                pathname: '/toolpad/reference/api/create-function',
              },
              {
                title: 'createComponent',
                pathname: '/toolpad/reference/api/create-component',
              },
              {
                title: 'getContext',
                pathname: '/toolpad/reference/api/get-context',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default pages;
