const users = ["Raaz", "Samrat", "Roshan"];
export const getUsers = (req, res) => {
   //find all users from database
   res.status(200).json({
      status: true,
      data: users,
      message: "USer fetched successfully"
   })
}

export const createUser = (req, res) => {
   const { name } = req.body;
   if (!name) {
      res.status(400).json({
         status: false,
         message: "Name is required"
      })
      return;
   }
   users.push(name);
   //save user in database logic

   res.status(200).json({
      status: true,
      users,
      message: "USer created successfully"
   })
}

export const updateUser = (req, res) => {
   const { id } = req.params;
   const { name } = req.body;

   res.status(200).json({
      status: true,
      users,
      message: "USer updated successfully"
   })
}

export const deleteUser = (req, res) => {
   const { userId } = req.params;

   delete users[userId];

   res.status(200).json({
      status: true,
      users,
      message: "USer deleted successfully"
   })
}