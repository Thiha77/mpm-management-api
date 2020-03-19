const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Employee = require('../models').Employee;
let photo;

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


// const getPhotoByEmpId = (req, res) => {
//   let id =req.params.id;
//   return Employee.findAll({
//       attributes: ['id','photo'],
//       where: {id: id},
      
//   })
//   .then( (result) =>{
//       res.send(JSON.stringify(result));   
//   })
// }

 
const deleteImage =(req,res) => {
  let photo = req.body.photo;
  let resultImage = photo.substr(22);
  //console.log(resultImage);
    try {
      fs.unlinkSync(resultImage);
      res.status(200).send('Successfully! Image has been Deleted');

    }catch (e) {
      res.status(400).send(e);
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
                 path : req.protocol + "://" + req.hostname +":5000" + '/' + req.file.path,
                 
             });
          })

}

module.exports = {uploadSingle,deleteImage}