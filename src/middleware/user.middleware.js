import{User} from '../database/models'
import {Op} from 'sequelize'

export const checkUserExist = async (req, res, next) => {
    const { email} = req.body;
    console.log(await User.findAll({}))
    const user = await User.findAll({
        where: {
            [Op.and]: [{ email }, { is_active: true }],
          },
     });
    if (user) {
      res.status(400).json({
        message:
          "User with email  provided, is already registered",
      });
      return false;
    }
    next();
  };

export const checkPasswords =async(req,res,next)=>{
    const {password,confirm_password}=req.body
    if(password !== confirm_password){
        res.status(400).json({
            message:"Password and confrim password are not eqaual"
        });
        return false
    }
    next()
} 