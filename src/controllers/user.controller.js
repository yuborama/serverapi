const user = {}
const User = require('../models/User.js')

user.create = async (req,res) => {
    console.log(req.body)
    const {nombre, apellido, telefono,cedula} = req.body
    const NewUser = new User({nombre,apellido, telefono, cedula})
    await NewUser.save()
    res.send("Usuario creado")
}
user.update = async (req,res) => {
    const {nombre, apellido, telefono,cedula} = req.body
    console.log('datos= ',nombre, apellido, telefono,cedula)
    console.log(req.params.id)
    await User.findByIdAndUpdate(req.params.id,{nombre, apellido, telefono,cedula})
    res.send("update user")
}
user.read =async (req,res) => {
console.log(req.params.id)
   const user =await User.findById(req.params.id)
   console.log(user)
   res.send(user)
}
user.deleteuser = (req,res) => {
    User.findByIdAndDelete(req.params.id)
    res.send("delete user")

}
user.readallusers = (req,res) => {
    const users = User.find()
    res.send(users)
}

module.exports = user