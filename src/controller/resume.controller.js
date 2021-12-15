const Resume = require('../model/resume.model');

const createResume = async (req, res) => {
    console.log(req.body);
    let resume = new Resume ({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        dob: req.body.dob,
        address: req.body.address,
        summary: req.body.summary,
        skills: req.body.skills,
        work_exprience: req.body.work_exprience,
        matric: req.body.matric,
        inter: req.body.inter,
        graduation: req.body.graduation,
    })
    resume.save()
    .then(user =>{
        res.json({
            success: true,
            message: ` Resume create successfully`,
            user
        })
    }).catch (error =>{
        res.json({
            success: false,
            message:`An error occured`
        })
    })
} 

module.exports = {
    createResume
}