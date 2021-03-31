const mongoose = require('mongoose')

const Url= `mongodb+srv://yuborama:jdpg1234@cluster0.2yscp.mongodb.net/cine`;

mongoconect = {
 useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
}

mongoose.connect(Url, mongoconect).then(db => console.log("DB is conected")).catch(err => console.log(err))

