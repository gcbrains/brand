const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const drive = google.drive("v3");

google.options({
    auth: new google.auth.GoogleAuth({
        keyFile: './token.json',
        scopes: ['https://www.googleapis.com/auth/drive.file']
    })
});

async function createRemoteFolder(force = false) {
    const remoteFolders = await drive.files.list({
        q: "mimeType = 'application/vnd.google-apps.folder' and name = 'Branding'"
    });

    if(force && remoteFolders.data.files.length > 0) {
        remoteFolders.data.files.forEach(async file => {
            console.log(`force deleting remote folder: ${file.name}`);

            await drive.files.delete({ fileId: file.id });
        });
    }

    let result;
    if(!force && remoteFolders.data.files.length >= 0) {
        console.log('remote folder already exists!');

        result = remoteFolders.data.files[0];
    } else {
        console.log('creating remote folder');
        const remoteFolder = await drive.files.create({
            resource: {
                name: 'Branding',
                mimeType: 'application/vnd.google-apps.folder'
            }
        });

        result = remoteFolder.data;
        console.log(result);

        console.log('sharing new folder with contact@gcbrains.com');
        const permission = await drive.permissions.create({
            fileId: result.id,
            requestBody: {
                role: 'reader',
                type: 'group',
                emailAddress: 'contact@gcbrains.com'
            }
        });
        console.log(permission.data);
    }

    console.log('folder is;');
    console.log(result);

    return result;
}

async function deleteFiles(remoteFolder) {
    const {data} = await drive.files.list({
        q: `'${remoteFolder.id}' in parents`
    });

    for(const file of data.files) {
        console.log(`deleting file: ${file.name}`);
        console.log(file);

        await drive.files.delete({ fileId: file.id });
    }
}

async function upload(folderPath, remoteFolder) {
    const fileNames = fs.readdirSync(folderPath);

    fileNames
        .filter(fileName => !fileName.startsWith('.'))
        .map(fileName => { return { fileName, filePath: path.join(folderPath, fileName) }; })
        .forEach(async ({ fileName, filePath }) => {
            const file = fs.statSync(filePath);
            if(file.isDirectory()) {
                console.log(`create dir ${filePath}`);

                const childRemoteFolder = await drive.files.create({
                    resource: {
                        name: fileName,
                        mimeType: 'application/vnd.google-apps.folder',
                        parents: [remoteFolder.id]
                    }
                });
                console.log(childRemoteFolder.data);

                await upload(filePath, childRemoteFolder.data);
            } else {
                console.log(`upload ${filePath}`);

                const remoteFile = await drive.files.create({
                    resource: {
                        name: fileName,
                        parents: [remoteFolder.id]
                    },
                    media: {
                        body: fs.createReadStream(filePath),
                    },
                });

                console.log('uploaded file');
                console.log(remoteFile.data);
            }
        });
}

async function main(args) {
    const remoteFolder = await createRemoteFolder(args[2] === '--force-create-folder');
    await deleteFiles(remoteFolder);
    await upload('../assets', remoteFolder);
}

main(process.argv);
