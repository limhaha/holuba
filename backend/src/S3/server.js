const express = require('express')

const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const { uploadFile, getFileStream } = require('./s3')

// const app = express()
const router = express.Router();



router.get('/images/:key', (req, res) => {
  console.log(req.params)
  const key = req.params.key
  const readStream = getFileStream(key)

  readStream.pipe(res)
})

router.post('/upload', upload.single('image'), async (req, res) => {
  const file = req.file
  console.log(file)


  const result = await uploadFile(file)
  await unlinkFile(file.path)

  res.send({imageUrl: `https://holuba.s3.ap-northeast-2.amazonaws.com/${result.Key}`})
})


module.exports = router;