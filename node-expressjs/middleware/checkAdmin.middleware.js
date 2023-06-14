
const checkAdmin = async (req, res, next) => {
   if (!req.user.isAdmin) {
      return res.status(401).json({
         status: false,
         message: 'Unuathorized user'
      })
   }
   next();
}

export default checkAdmin;