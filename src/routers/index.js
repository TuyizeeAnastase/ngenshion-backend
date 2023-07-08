import express from 'express'
import userRouters from "./user.routers"

const routes=express()

routes.get('/',(req,res)=>{
    res.status(200).json({
        message: "This is E-COMMERCE BACKEND",
      });
})

routes.use('/api/v1/auth',userRouters)

routes.get("*", (req, res) => {
    res.status(404).json({
      message: "Page not found, try again",
    });
  });

export default routes  