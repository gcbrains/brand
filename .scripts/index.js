const fs = require('fs');
const {google} = require('googleapis');
const {GoogleAuth} = require('google-auth-library');
const drive = google.drive("v3");

google.options({auth: new GoogleAuth({
  keyFile: './token.json',
  scopes: ['https://www.googleapis.com/auth/drive'],
})});

async function upload() {
  const fileName = '../assets/logo/logo-circle.png';

  const res = await drive.files.create( {
      requestBody: {
        // a requestBody element is required if you want to use multipart
        name: 'logo-circle.png'
      },
      media: {
        body: fs.createReadStream(fileName),
      },
    },{
      // Use the `onUploadProgress` event from Axios to track the
      // number of bytes uploaded to this point.
      onUploadProgress: _ => {
          console.log('uploading...');
      },
    }
  );

  console.log(res.data);
}

async function deleteExisting() {
  const {data} = await drive.files.list({ pageSize: 10 });

    for(const file of data.files) {
        console.log(`deleting file: ${file.name}`);

        await drive.files.delete({fileId:file.id});
    }
}

async function main() {
    await deleteExisting();
    await upload();
}

main();
