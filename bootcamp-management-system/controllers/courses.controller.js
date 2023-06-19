export const addCourse = (req, res) => {
   try {
      //find whether this bootcamp exists- 648fc6017b23ac9d024816e1 : req.params
      //append req.body.user -> req.user._id
      //append req.body.bootcamp -> req.params.bootcamp
      console.log(req.body)
   } catch (error) {
      console.log(error);
   }
}