const mysql = require('mysql');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken") 
const { promisify } = require("util");
// const userController = require("../controller/user");
// Connection Pool
let db = mysql.createConnection({
  host:'localhost',
  user: 'root',
  password: '****************MySQL Password***********',
  database: '****************MySQL DataBase Name *******'
});

db.connect((error)=>{
    if(!error){
        console.log('Database Connection Done');
    }else{
        console.log('Database Not Connected');
    }
})

// Add new user
exports.register = (req, res) => {
    const { name,email,password,confirm_password } = req.body;
    console.log(req.body);
    db.query('select email from users where email=?',[email],
    async (error,result)=>{
      if(error){
        console.log(error);
      }
      if(result.length>0){
        return res.status(400).render("createaccount", {
          msg: "Email address already used try valid address",
          msg_type: "error",
        }); 
      }
      try {
            const { name,email,password,confirm_password } = req.body;
        if (!name || !email ||!password ||!confirm_password ) {
            {
                return res.status(400).render("createaccount", {
                  msg: "Please Enter Your Email and Password",
                  msg_type: "error",
                });             
        }   
    }
   // User the connection
      db.query('INSERT INTO login_crud.users SET name = ?, email = ?, password = ?, confirm_password = ?',
       [name,email,password,confirm_password], (err, rows) => {
        if (!err) {
          res.status(200).render('login',{
            msg: "User Registration Success",
            msg_type:"okay",
          });
        } else {
          console.log(err);
        }
      });
    
    }catch{
      console.log("Update error on fields.")
    }

  })
}


    // auth.js module exports router login
exports.login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).render("login", {
        msg: "no email Please Enter Your Email and Password",
        msg_type: "error",
      });
}  

db.query(
  "select * from users where email=?",
  [email],
  async (error, result) => {
    // console.log(result);
    if (result.length <= 0) {
      return res.status(401).render("login", {
        // msg send the Content to login page
        // msg type is style the msg content
        msg: "Please Enter Valid Email and Password fefe",
        msg_type: "error",
      });
    }else{
      if ((await bcrypt.compare(password, result[0].password))) {
        return res.status(401).render("login",
        {
          msg: "Please Enter Correct Password crt pass",
          msg_type: "error",
        }
        );
      }
      else{
        // const id = result[0].id;        
        // const name = result[0].name;
        // const email = result[0].email;
        //   console.log(name);
        // console.log(email);

        // // res.status(200).render("home")
        //   res.status(200).render("home",{
        //     name:name
        //   });
        const id = result[0].id;
          // JWT JSON Web token create and expires is mentioned days in .env file 90days
          // 
          const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });
          // Cookie Expire time
          const cookieOptions = {
            expires: new Date(
              Date.now() +
                process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            // Only work on http
            httpOnly: true,
          };
          // console.log(cookieOptions);
          res.cookie("Yogesh", token, cookieOptions);
          res.status(200).render("home");
      }
    }     
  }
);
} catch (error) {
console.log(error);
}
};

exports.profile =  async(req, res,next) => {
  console.log(req.cookies);
  if (req.cookies.Yogesh) {
    try {
      const decode = await promisify(jwt.verify)(
        req.cookies.Yogesh,
        process.env.JWT_SECRET
      );
      console.log(decode);
      db.query(
        "select * from users where id=?",
        [decode.id],
        (err, results) => {
          console.log(results);
          if (!results) {
            return next();
          }
          req.data = results[0];
          return next();
        }
      );
    } catch (error) {
      console.log(error);
      return next();
    }
  } else {
    next();
  }

}

exports.orange = (req,res,next)=>{
    // User the connection
    db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
     [1,'Orange',20], (err, rows) => {
      db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
        if (!err) {       
          res.status(200).render('shopping-cart',{onion:'Orange Order Placed',msg_type:'okay',rows });
        } else {
          console.log(err);
        }
      });

    });
}

exports.onion = (req,res,next)=>{
    // User the connection
    db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
     [2,'Onion',30], (err, rows) => {   
      db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
        if (!err) {       
          res.status(200).render('shopping-cart',{onion:'Onion Order Placed',msg_type:'okay',rows});
        } else {
          console.log(err);
        }
      });
    });

}

exports.meat = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [1,'Meat',100], (err, rows) => {
   db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Meat Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.cabbage = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [1,'cabbage',20], (err, rows) => {
    db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Cabbage Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.lemon = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [5,'lemon',10], (err, rows) => {
    db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Lemon Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.potato = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [2,'potato',30], (err, rows) => {
    db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Potato Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.avacado = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [2,'avacado',50], (err, rows) => {
    db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Avacado Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.carrot = (req,res,next)=>{
  // User the connection
  db.query('INSERT INTO login_crud.cartitems SET qty = ? , name= ? , price = ?',
   [2,'carrot',30], (err, rows) => {
    db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
      if (!err) {       
        res.status(200).render('shopping-cart',{onion:'Carrot Order Placed',msg_type:'okay',rows});
      } else {
        console.log(err);
      }
    });
  });
}

exports.delete = (req, res) => {
  console.log(req.params.SNO);
  // Delete a record
  // User the connection
  db.query('DELETE FROM login_crud.cartitems WHERE SNO = ?',[req.params.SNO], (err, rows) => {
    if(!err) {
      res.redirect('shopping-cart');
    } else {
      console.log(err);
    }
  });
  
}

exports.view = (req, res) => {
  // view the user cart items
  db.query('SELECT * FROM login_crud.cartitems', (err, rows) => {
    if (!err) {       
      res.status(200).render('shopping-cart',{onion:'YOUR ORDER ITEMS LIST',msg_type:'okay',rows});
    } else {
      console.log(err);
    }
  });    
}

exports.search = (req, res) => {
console.log(req.body.qty);
  // view the user cart items
  db.query('SELECT * FROM login_crud.cartitems WHERE qty LIKE ? OR name LIKE ?',["%" + req.body.qty+"%","%"+req.body.qty +"%"], (err, rows) => {
    if (!err) {       
      res.status(200).render('shopping-cart',{onion:'YOUR SEARCH ITEMS LIST HERE',msg_type:'okay',rows});
    } else {
      console.log(err);
    }
  });    
}
