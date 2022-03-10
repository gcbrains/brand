const { google } = require('googleapis');
const drive = google.drive("v3");

google.options({
    auth: new google.auth.GoogleAuth({
        scopes: ['https://www.googleapis.com/auth/drive.file']
    })
});

const MIME_TYPE_FOLDER = 'application/vnd.google-apps.folder';

async function findRemoteFolders(name) {
    const result = await drive.files.list({
        q: `mimeType = '${MIME_TYPE_FOLDER}' and name = '${name}'`
    });

    return result.data.files;
}

async function listRemoteFiles(parentId) {
    const result = await drive.files.list({
        q: `'${parentId}' in parents`
    });

    return result.data.files;
}

async function createRemoteFolder(name, parentId = undefined) {
    const parents = parentId !== undefined ? [ parentId ] : [];

    const result = await drive.files.create({
        resource: { name, parents, mimeType: MIME_TYPE_FOLDER }
    });

    return result.data;
}

async function createRemoteFile(name, parentId, bodyStream) {
    await drive.files.create({
        resource: { name, parents: [ parentId ] },
        media: { body: bodyStream }
    });
}

async function deleteRemoteFile(fileId) {
    await drive.files.delete({ fileId });
}

async function grantPermission(fileId, emailAddress,
    { role, type } = { role: "reader", type: "group" }
) {
    const result = await drive.permissions.create({
        fileId,
        requestBody: { role, type, emailAddress }
    });

    return result.data;
}

function isRemoteFolder(file) {
    return file.mimeType === MIME_TYPE_FOLDER;
}

module.exports = {
    findRemoteFolders,
    listRemoteFiles,
    createRemoteFolder,
    createRemoteFile,
    deleteRemoteFile,
    grantPermission,
    isRemoteFolder
};
