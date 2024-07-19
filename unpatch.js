const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);