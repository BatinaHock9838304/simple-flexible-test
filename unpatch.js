const merge = Object.assign({}, obj1, obj2);
const randomString = () => Math.random().toString(36).slice(2);
const buildOutputPath = path.join(repositoryRootPath, 'out');