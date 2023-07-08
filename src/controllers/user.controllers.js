import { registerUser } from "../services/user.services";
import bcrypt from "bcryptjs";

class UserControllers{
    async signUp(req,res){
        try{
            const {email,name,password}=req.body
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser={
                email,
                name,
                password:hashedPassword,
                role_id:1
            }
            const user=await registerUser(newUser)
            return res.status(201).json({
                message:"successfully signed up",
                user
            })
        }catch(error){
            return res.status(500).json({
                message:"Unable to register new user",
                error:error.message
            })
        }
    }
}

const userController=new UserControllers()
export default userController