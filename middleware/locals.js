/**
 * Created by xy206 on 2016/1/1.
 */

/**
 * 将session中的变量暴露给视图
 * @param req
 * @param res
 * @param next
 */
module.exports=function(req,res,next){
    if(req.session&&req.session.user){
        res.locals.user=req.session.user;
    }
    next();
}