const User = require('../model/user.model');
const bcrypt = require('bcryptjs')

// bcrypt.hash(req.body.password,8,(err, hashedPass) => {
//     if(err) {
//         res.json({
//             error:err
//         })
//     }
// })

const userRegister = async (req, res) =>{
    let hashedPass = await bcrypt.hash(req.body.password,8)
    let newUser = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        password: hashedPass,
    })
    const findUser = await User.findOne({email: req.body.email})
    if (findUser) {
        return res.status(409).json({
            success: false,
            message: `email Already exist`
        })
    } else {
    newUser.save()
    .then(user =>{
        res.json({
            success: true,
            message: ` User create successfully`,
            user
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`
        })
    })
  }
}

const Userlogin = async(req, res) =>{
    // let loguser = {
    //     email: req.body.email,
    //     password: req.body.password
    // }
    //const findUser = await User.findOne(user)

   await User.findOne({email: req.body.email})
    .then(user =>{
        if (user){
            let result = bcrypt.compare(req.body.password, user.password)
            // bcrypt.compare(req.body.password, user.password, (err,result))
            //     if(err) {
            //         res.json({
            //             error: err
            //         })
            //     }
                //console.log(result);
                if(result){
                    return res.status(200).json({
                        success: true,
                        message: ` User login successfully`,
                        user
                    })
                }else{
                    console.log(`password does not match!!`);
                    return res.status(401).json({
                        message: 'password does not match!!'
                    })
                }
            //})
        }else {
            return res.status(400).json({
                success: false,
                    message:`User not found or wrong password`
            })
        }
    })
    
}

const getAllUser = async(req, res) =>{
    User.find()
    .then(user =>{
        res.json({
            success: true,
            message: ` getting all users`,
            user
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`,
            error
        })
    })
}

const updateUser = async(req, res) =>{
    let userUpdate = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email
    }
    User.findOneAndUpdate({_id: req.params.id},userUpdate,{new: true})
    .then(user =>{
        res.status(200).json({
            success: true,
            message: `Successfully updated`,
            user
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in updating user`,
            error
        })
    })
}

const deleteUser = async(req, res) =>{
    User.findByIdAndDelete({_id: req.params.id})
    .then(user =>{
        res.status(200).json({
            success: true,
            message: `Successfully Deleted`,
            user
        })
    }).catch (error =>{
        res.status(500).json({
            success: false,
            message: `error in Deleting User`,
            error
        })
    })
}

module.exports = {
    userRegister,
    Userlogin,
    getAllUser,
    updateUser,
    deleteUser
}