const fs = require('fs');
const {google} = require('googleapis');
const drive = google.drive("v3");

google.options({
    auth: new google.auth.GoogleAuth({
        keyFile: './token.json',
        scopes: ['https://www.googleapis.com/auth/drive.file']
    })
});

let folder;

async function createFolder(force = false) {
    const folders = await drive.files.list({
        pageSize: 1,
        q: "mimeType = 'application/vnd.google-apps.folder'"
    });

    if(force && folders.data.files.length > 0) {
        const old = folders.data.files[0];
        console.log(`force deleting folder: ${old.name}`);

        await drive.files.delete({ fileId: old.id });
    }

    if(!force && folders.data.files.length >= 0) {
        console.log('folder already exists!');


        folder = folders.data.files[0];
    } else {
        console.log('creating folder');
        const branding = await drive.files.create({
            resource: {
                name: 'Branding',
                mimeType: 'application/vnd.google-apps.folder'
            }
        });

        folder = branding.data;
        console.log(folder);

        console.log('sharing new folder with contact@gcbrains.com');
        const permission = await drive.permissions.create({
            fileId: folder.id,
            requestBody: {
                role: 'reader',
                type: 'group',
                emailAddress: 'contact@gcbrains.com'
            }
        });
        console.log(permission.data);
    }

    console.log('folder is;');
    console.log(folder);
}

async function deleteExisting() {
    const {data} = await drive.files.list({ pageSize: 10 });

    for(const file of data.files) {
        if(file.mimeType === 'application/vnd.google-apps.folder') {
            continue;
        }

        console.log(`deleting file: ${file.name}`);
        console.log(file);

        await drive.files.delete({fileId:file.id});
    }
}

async function upload() {
    const fileName = '../assets/logo/logo-circle.png';

    const file = await drive.files.create({
        resource: {
            name: 'logo-circle.png',
            parents: [folder.id]
        },
        media: {
            body: fs.createReadStream(fileName),
        },
    });

    console.log('uploaded file');
    console.log(file.data);
}

async function main(args) {
    await createFolder(args[2] === '--force-create-folder');
    await deleteExisting();
    await upload();
}

main(process.argv);
