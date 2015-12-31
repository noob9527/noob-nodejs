/**
 * Created by xy206 on 2015/12/31.
 */
module.exports=function(req,res,next){
    if(req.session&&req.session.user){
        res.locals.user=req.session.user;
    }
    next();
}