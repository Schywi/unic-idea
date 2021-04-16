import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';


const handleUnlink = async (req) => {

  const path = './public/uploads'
   await fs.rmdir(`${path}`, { recursive: true },(err) => {
    if (err) throw err;
  console.log(`${path}` ,'was deleted');

  })
}

const handleReaddirSync = () => {
  var files = fs.readdirSync('./public/uploads');
  console.log("SendFIles", files)

  return files;
}



// Returns a Multer instance that provides several methods for generating 
// middleware that process files uploaded in multipart/form-data format.
const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Returns middleware that processes multiple files sharing the same field name.
apiRoute.use(upload.array('theFiles'));

apiRoute.post((req, res) => {
 
  
   

  res.status(200).json({ data: 'sucess' });
});

apiRoute.get((req, res) => {
 
  const data = handleReaddirSync();
  res.status(200).json({ data: data });
});

apiRoute.put((req, res) => {
 
  handleUnlink();
  res.status(200).json({ data: 'data was deleted' });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};