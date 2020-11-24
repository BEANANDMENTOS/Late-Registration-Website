var express = require('express');
var router = express.Router();
var path = require("path");
var https = require("https");
var http = require("https");


let nameTH = "นาวี ฤทธิ์เดช";
let nameEng = "Nave Ritdeath"
let ID = "6209650000"

// router.post('/login', async function(req, res) {
//   console.log(req.body);
//   if(req.body.username == '6209650222' && req.body.password == '1759900375116') {
//     res.render('home', {
//       status: true,
//       message: "Success",
//       type: "student",
//       username: "6209650222",
//       tu_status: "ปกติ",
//       statusid: "10",
//       displayname_th: "ภูริน โถทอง",
//       displayname_en: "POORIN THOTONG",
//       email: "poorin.tho@dome.tu.ac.th",
//       department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
//       faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
//     });
//   }
//   else if(req.body.username == '6209650230' && req.body.password == '1412') {
//     res.render('home', {
//       status: true,
//       message: "Success",
//       type: "student",
//       username: "6209650230",
//       tu_status: "ปกติ",
//       statusid: "10",
//       displayname_th: "นวพงศ์ สิตรุโน",
//       displayname_en: "Nawapong Sitaruno",
//       email: "nawapong.sit@dome.tu.ac.th",
//       department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
//       faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
//     });
//   }
//   else if(req.body.username == 'isus' && req.body.password == 'api') {
//     res.render('home', {
//       status: true,
//       message: "Success",
//       type: "student",
//       username: "6209650222",
//       tu_status: "ปกติ",
//       statusid: "10",
//       displayname_th: "ภูริน โถทอง",
//       displayname_en: "POORIN THOTONG",
//       email: "poorin.tho@dome.tu.ac.th",
//       department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
//       faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
//     });
//   }
//   else if(req.body.username == 'admin' && req.body.password == 'eiei')  {
//     res.render('home', {
//       status: true,
//       message: "Success",
//       type: "employee",
//       username: "",
//       tu_status: "ปกติ",
//       statusid: "10",
//       displayname_th: "พี่ริน",
//       displayname_en: "P' Rin",
//       email: "EIEI@dome.tu.ac.th",
//       department: "",
//       faculty: "",
//     });
//   }

//   else res.render('login')
// });

const getlogin = (userName, password) => {
  return new Promise((resolve, reject) => {
      var options = {
          'method': 'POST',
          'hostname': 'restapi.tu.ac.th',
          'path': '/api/v1/auth/Ad/verify',
          'headers': {
              'Content-Type': 'application/json',
              'Application-Key': 'TUbf2a9e155ac34ffe2d7a6c3a1215758054ec08cede03aa4b7c2bf901b94a7436a479464ca406eef8aa37278c17e9eeb6'
          }
      };
      var req = https.request(options, (res) => {
          var chunks = [];
          res.on("data", function (chunk) {
              chunks.push(chunk);
          });
          res.on("end", function (chunk) {
              var body = Buffer.concat(chunks);
              //result = body;
              resolve(body.toString());
              //result = chunks;
          });
          res.on("error", function (error) {
              console.error(error);
              reject(error);
          });
      });
      var postData = "{\n\t\"UserName\":\"" + userName + "\",\n\t\"PassWord\":\"" + password + "\"\n}";
      req.write(postData);
      req.end();
  });
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/admin', function(req, res, next) {
  res.render('admin', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});
router.get('/home', function (req, res, next) {
  res.render('home', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/accInfo', function (req, res, next) {
  res.render('accInfo', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/agreement', function (req, res, next) {
  res.render('agreement', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/attdoc', function (req, res, next) {
  res.render('attdoc', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/addsubject', function (req, res, next) {
  res.render('addsubject', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/information', function (req, res, next) {
  res.render('information', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/contactus', function (req, res, next) {
  res.render('contactus', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/payment', function (req, res, next) {
  res.render('payment', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.get('/charges', function (req, res, next) {
  res.render('charges', {
    status: true,
    message: "Success",
    type: "student",
    username: "6209650222",
    tu_status: "ปกติ",
    statusid: "10",
    displayname_th: "ภูริน โถทอง",
    displayname_en: "POORIN THOTONG",
    email: "poorin.tho@dome.tu.ac.th",
    department: "ปริญญาตรีภาคพิเศษ สาขาวิชาวิทยาการคอมพิวเตอร์",
    faculty: "คณะวิทยาศาสตร์และเทคโนโลยี",
  });
});

router.post("/login", async (req, res) => {
  console.log(req.body);
    const temp = await getlogin(req.body.username, req.body.password);
    console.log("temp = " + temp);
    if (temp) {
        let j = JSON.parse(temp);
        console.log(j);
        if (j.status == true) {
          username = j.username;
            displayname_th = j.displayname_th;
            displayname_en = j.displayname_en;
            emaill = j.email;
            facultyy = j.faculty;
            departmentt = j.department;

            res.render("home",{
              username : j.username,
                displayname_th : j.displayname_th,
                name_endisplayname_en : j.displayname_en,
                email : j.email,
                faculty : j.faculty,
                department : j.department,
            });
            //res.send("Name th: " + j.displayname_th);
        } else {
            res.render("login");
        }
        // if (j.data.status == true) {
        //   res.send("ʶҹ�:  �ѡ�֡��")
        // } else (j.data.status)
        // req.send("ʶҹ�: ��ʶҾ")
    } else {
        res.render("login");
    }
});
module.exports = router;
