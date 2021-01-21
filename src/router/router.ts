import {Router, Request,Response} from 'express'
const router = Router();

router.get('/heroes', (req: Request , resp : Response)=>{
    resp.json({
       ok : true,
       mensaje: 'bien' 
    });
});


export default router;