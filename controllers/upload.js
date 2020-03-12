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
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
      }

})
  
const upload = multer({ storage: storage }).single("Image");

const uploadSingle = (req, res) => {
    upload(req, res, function (err) {
            if (err) {
              
            } 
             res.json({
                 success :true,
                 message:'Image uploaded',
                 path: req.file.path
                //  body: req.body
             });
          })

}

module.exports = {uploadSingle}