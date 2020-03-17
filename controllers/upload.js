const multer = require('multer');
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { path }  = req.body;
        const dirpath = './uploads/';
        const dir = dirpath + path;
        fs.exists(dir, exist => {
        if (!exist) {
          return fs.mkdir(dir, {recursive: true}, error => cb(error, dir), )
        }
        return cb(null, dir)
        })

      },
      filename: (req, file, cb) => {       
        //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        cb(null,file.originalname);
      }

});


 
const deleteImage =(req,res) => {
   let id = req.body.id
    if(!req.body.photo) {
      console.log("No file received");
      message="Error! in image delete";
      return res.status(500).json('error in delete');
    
    }else {
      console.log('file received');
      console.log(req.body.photo);
    }
    try {
     fs.unlinkSync(dir + req.body.photo);
     console.log("successfully delete")
     return res.status(200).send('Successfully! Image has been Deleted');

    }catch (e) {
    return res.status(400).send(e);
  }
}

const upload = multer({ storage: storage }).single("Image");
const uploadSingle = (req, res) => {
  
    upload(req, res, function (err) {     
            if (err) {
              
            }
           
             res.json({
                 success :true,
                 message:'Image uploaded',
                 //path: req.file.path
                 path : req.protocol + "://" + req.hostname +":5000" + '/' + req.file.path,
                 
             });
          })

}

module.exports = {uploadSingle,deleteImage}