const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: "Admin already exists" });
  }
  User.create({
    username,
    password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
      const username = req.body.username;
      const password = req.body.password;
      console.log(JWT_SECRET);
  
      const user = await User.find({
          username,
          password
      })
      if (user) {
          const token = jwt.sign({
              username
          }, JWT_SECRET);
  
          res.json({
              token
          })
      } else {
          res.status(411).json({
              message: "Incorrect email and pass"
          })
      }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
   const response = await Course.find({});
  
       res.json({
           courses: response
       })
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

    const courseId = req.params.courseId;
      const username = req.username; // comming from middleware
      //const randomdata = req.randomData;
    
      // we are not taking username in header this time , we are extracting it from jwt
      // const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get("/purchasedCourses", userMiddleware, async(req, res) => {
  // Implement fetching purchased courses logic
   const user = await User.findOne({
        username: req.username     // comming from middleware
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router;
