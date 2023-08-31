import  express from "express";
import userrouters from "./userroutes";

const router=express.Router()
router.use("/users",userrouters)
export default router
 