const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require("./src/db/connect")
app.use(cors())

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');


// multer
// use busboy
// const fileStorageEngine =multer.diskStorage({
    //     destination:(req, file, cb) =>{
        //         cb(null, "./images");
        //     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "--" + file.originalname);
//     },
// });

// const upload = multer({ storage: fileStorageEngine });

// app.post("/single", upload.single('image'), 
// (req, res) => {
    //     console.log(req.file);
    //     res.send("Single File Upload Success")
    // });
    
    // app.post("/multiple", upload.array('images', 3),
    //  (req, res) => {
        //     console.log(req.file);
        //     res.send("Multiple File Upload Success")
        // });
        
        const web = require('./src/routers/web');
        const batRoute = require("./src/routers/batRoute")
        const fieldRoute = require("./src/routers/fieldRoute")
        const odiRoute = require("./src/routers/odiRoute")

app.use('/', web);
app.use(fieldRoute);
app.use(odiRoute);
app.use(batRoute);

app.listen(port,()=> {
    console.log(`connection is live at port no. ${port}`);
})