const { User } = require('../models')

const userController = {
    //get all users
    getAllUsers(req,res) {
        User.find({})
        .populate({
            path: 'products',
            select: '-__v'
         })
        .select('-__v')
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        });
      },
    
    //get User by ID with thoughts
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
           .populate({
               path: 'products',
               select: '-__v'
            })
           .select('-__v')
           .then(dbUserData => res.json(dbUserData))
           .catch(err => {
               console.log(err)
               res.status(500).json(err)
        });
     },

     //create User
     createUser({ body }, res) {
         User.create(body)
         .then(dbUserData => res.json(dbUserData))
         .catch(err => res.status(400).json(err));
     },

     //update User
     updateUser({ params, body}, res) {
         User.findOneAndUpdate({ _id: params.id}, body, { new: true, runValidators: true})
         .then(dbUserData => {
             if (!dbUserData) {
                 res.status(404).json({ message: 'No user found with this ID!' });
                 return;
             }
             res.json(dbUserData);
         })
            .catch(err => res.json(err))
     },

     //delete User
     deleteUser({ params }, res) {
         User.findOneAndDelete({ _id: params.id })
         .then(dbUserData => {
         if (!dbUserData) {
             res.status(404).json({ message: 'No user found with this ID!' });
             return;
         }
         res.json(dbUserData);
         })
         .catch(err => res.status(400).json(err))
     }
     
};

module.exports = userController