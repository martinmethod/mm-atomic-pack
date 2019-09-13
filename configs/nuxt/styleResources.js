import { name } from '../../package.json';

const resourcesPath = 'assets/styles/resources';
const atomicPath = `node_modules/${name}/${resourcesPath}`;
const localPath = `~${resourcesPath}`;
const resources = `node_modules/sass-resources`;

export default {
  scss: [
    `${resources}/functions/**/*.scss`,
    `${resources}/mixins/**/*.scss`,
    `${atomicPath}/base.scss`,
    `${localPath}/base.scss`,
    `${atomicPath}/functions/**/*.scss`,
    `${localPath}/functions/**/*.scss`,
    `${atomicPath}/data/swatches/primary/**/*.scss`,
    `${localPath}/data/swatches/primary/**/*.scss`,
    `${atomicPath}/data/swatches/secondary/**/*.scss`,
    `${localPath}/data/swatches/secondary/**/*.scss`,
    `${atomicPath}/data/roles/**/*.scss`,
    `${localPath}/data/roles/**/*.scss`,
    `${atomicPath}/mixins/**/*.scss`,
    `${localPath}/mixins/**/*.scss`,
    `${atomicPath}/placeholders/**/*.scss`,
    `${localPath}/placeholders/**/*.scss`
  ]
};
