import { name } from '../../package.json';

const resourcesPath = 'assets/styles/general';
const atomicPath = `${name}/${resourcesPath}`;
const localPath = `@${resourcesPath}`;

export default [
  `normalize.css/normalize.css`,
  `${atomicPath}/font-faces.scss`,
  `${atomicPath}/scaffolding.scss`,
  `${localPath}/scaffolding.scss`,
  `${atomicPath}/app.scss`,
  `${localPath}/app.scss`,
  `${atomicPath}/print.scss`,
  `${localPath}/print.scss`
];
