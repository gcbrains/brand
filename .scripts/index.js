const fs = require('fs');
const path = require('path');
const lib = require('./lib');

async function createRemoteFolder(force = false) {
    const remoteFolders = await lib.findRemoteFolders('Branding');

    if(force && remoteFolders.length > 0) {
        remoteFolders.forEach(async folder => {
            console.log(`force delete Branding folder: ${folder.name}`);
            await lib.deleteRemoteFile(folder.id);
        });
    }

    let result;
    if(!force && remoteFolders.length > 0) {
        result = remoteFolders[0];
    } else {
        console.log('creating Branding folder');
        result = await lib.createRemoteFolder('Branding');

        console.log('sharing Branding folder with contact@gcbrains.com');
        await lib.grantPermission(result.id, 'contact@gcbrains.com');
    }

    return result;
}

async function deleteFiles(basePath, remoteFolder, force = false) {
    const remoteFiles = await lib.listRemoteFiles(remoteFolder.id);

    for(const remoteFile of remoteFiles) {
        if(force) {
            console.log(`delete remote file/folder: ${remoteFile.name}`);
            await lib.deleteRemoteFile(remoteFile.id);
        } else {
            const localPath = path.resolve(basePath, remoteFile.name);
            if(lib.isRemoteFolder(remoteFile)) {
                if(!fs.existsSync(localPath)) {
                    console.log(`delete remote folder: ${localPath}`);
                    await lib.deleteRemoteFile(remoteFile.id);
                } else {
                    await deleteFiles(localPath, remoteFile, false);
                }
            } else {
                if(!fs.existsSync(path.resolve(basePath, remoteFile.name))) {
                    console.log(`delete remote file: ${remoteFile.name}`);
                    await lib.deleteRemoteFile(remoteFile.id);
                }
            }
        }
    }
}

async function upload(folderPath, remoteFolder) {
    const remoteFiles = (await lib.listRemoteFiles(remoteFolder.id))
        .reduce((previous, current) => {
            return { [current.name]: current, ...previous };
        }, { });

    fs.readdirSync(folderPath)
        .filter(fileName => !fileName.startsWith('.'))
        .map(fileName => { return { fileName, filePath: path.join(folderPath, fileName) }; })
        .forEach(async ({ fileName, filePath }) => {
            const file = fs.statSync(filePath);
            if(file.isDirectory()) {
                let childRemoteFolder = remoteFiles[fileName];
                if(childRemoteFolder === undefined) {
                    console.log(`create remote folder ${filePath}`);
                    childRemoteFolder = await lib.createRemoteFolder(fileName, remoteFolder.id);
                }
                await upload(filePath, childRemoteFolder);
            } else if(remoteFiles[fileName] === undefined) {
                console.log(`upload ${filePath}`);
                await lib.createRemoteFile(fileName, remoteFolder.id, fs.createReadStream(filePath));
            }
        });
}

async function main(args) {
    const forceCreateFolder = args.some(arg => arg === '--force-create-folder');
    const forceDeleteFiles = args.some(arg => arg === "--force-delete-files");

    const remoteFolder = await createRemoteFolder(forceCreateFolder);
    await deleteFiles('../assets', remoteFolder, forceDeleteFiles);
    await upload('../assets', remoteFolder);
}

main(process.argv);
