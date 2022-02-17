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
        console.log('Branding folder already exists!');
        result = remoteFolders[0];
    } else {
        console.log('creating Branding folder');
        result = await lib.createRemoteFolder('Branding');

        console.log('sharing Branding folder with contact@gcbrains.com');
        await lib.grantPermission(result.id, 'contact@gcbrains.com');
    }

    return result;
}

async function deleteFiles(remoteFolder) {
    const remoteFiles = await lib.listRemoteFiles(remoteFolder.id);

    for(const remoteFile of remoteFiles) {
        console.log(`deleting remote file/folder: ${remoteFile.name}`);
        await lib.deleteRemoteFile(remoteFile.id);
    }
}

async function upload(folderPath, remoteFolder) {
    fs.readdirSync(folderPath)
        .filter(fileName => !fileName.startsWith('.'))
        .map(fileName => { return { fileName, filePath: path.join(folderPath, fileName) }; })
        .forEach(async ({ fileName, filePath }) => {
            const file = fs.statSync(filePath);
            if(file.isDirectory()) {
                console.log(`create dir ${filePath}`);
                const childRemoteFolder = await lib.createRemoteFolder(fileName, remoteFolder.id);
                await upload(filePath, childRemoteFolder);
            } else {
                console.log(`upload ${filePath}`);
                await lib.createRemoteFile(fileName, remoteFolder.id, fs.createReadStream(filePath));
            }
        });
}

async function main(args) {
    const remoteFolder = await createRemoteFolder(args[2] === '--force-create-folder');
    await deleteFiles(remoteFolder);
    await upload('../assets', remoteFolder);
}

main(process.argv);
