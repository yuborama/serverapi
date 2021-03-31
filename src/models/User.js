const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    telefono: { type: String, required: true },
    cedula: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = model('User',UserSchema)