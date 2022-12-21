const mongoose = require('mongoose') // necesario para conexion
const url = "mongodb+srv://Edgar:naRUTO0466@dialectos.jvoy3ve.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);
mongoose.connect(url,
                 {
                   useNewUrlParser: true,
                   useUnifiedTopology: true,
                 })
.then(()=> console.log('Conectado a MONGO') )
.catch((e)=>console.log('El error de conexion es:' + e ))


// CREACION DE SCHEMA PARA MONGOOSE
const adjetivosSchema = mongoose.Schema({
  Español:String,
  Nahuatl:String
})

const AdjetivosModel = mongoose.model('adjetivos', adjetivosSchema)

// READ ADJETIVOS
const mostrarAdjetivos = async()=>{
  const adjetivos = await AdjetivosModel.find()
  console.log(adjetivos)
}

const pronombresSchema = mongoose.Schema({
  Español:String,
  Nahuatl:String
})

const PronombresModel = mongoose.model('pronombres', pronombresSchema)

// READ PRONOMBRES
const mostrarPronombres = async()=>{
  const pronombres = await PronombresModel.find()
  console.log(pronombres)
}

const sustantivosSchema = mongoose.Schema({
  Español:String,
  Nahuatl:String
})

const SustantivoModel = mongoose.model('sustantivos', sustantivosSchema)

// READ SUSTANTIVOS
const mostrarSustantivos = async()=>{
  const sustantivos = await SustantivoModel.find()
  console.log(sustantivos)
}

// CREATE ADJETIVOS
const crearAdjetivos = async()=>{
  const adjetivo =  new AdjetivosModel({
    Español:'tinta',
    Nahuatl:'tlili'
  })
  const resultado = await adjetivo.save()
  console.log(resultado)
}

// CREATE PRONOMBRES
const crearPronombres = async()=>{
  const pronombre =  new PronombresModel({
    Español: 'yo',
    Nahuatl:'nejuatl'
  })
  const resultado = await pronombre.save()
  console.log(resultado)
}
// CREATE SUSTANTIVOS
const crearSustantivos = async()=>{
  const sustantivo =  new SustantivoModel({
    Español: 'agua',
    Nahuatl:'átl'
  })
  const resultado = await sustantivo.save()
  console.log(resultado)
}
// UPDATE ADJETIVO
const actualizarAdjetivo = async (id)=>{ // recibe id
  const adjetivo = await AdjetivosModel.updateOne({_id:id},
  {
    $set:
    {
      Español:'tinta Modificado',
      Nahuatl:'tlili'    
    }
  })
}

// UPDATE PRONOMBRES
const actualizarPronombre = async (id)=>{ // recibe id
  const pronombre = await PronombresModel.updateOne({_id:id},
  {
    $set:
    {
      Español: 'yo Modificado',
      Nahuatl:'nejuatl'   
    }
  })
}

// UPDATE SUSTANTIVOS
const actualizarSustantivo = async (id)=>{ // recibe id
  const sustantivo = await SustantivoModel.updateOne({_id:id},
  {
    $set:
    {
      Español: 'agua Modificado',
      Nahuatl:'átl'   
    }
  })
}

// DELETE ADJETIVO
const eliminarAdjetivo = async(id)=>{
  const adjetivo = AdjetivosModel.deleteOne({_id:id})
  console.log(adjetivo)
}


// DELETE PRONOMBRE
const eliminarPronombre = async(id)=>{
  const pronombre = PronombresModel.deleteOne({_id:id})
  console.log(pronombre)
}

// DELETE SUSTANTIVO
const eliminarSustantivo = async(id)=>{
  const sustantivo = SustantivoModel.deleteOne({_id:id})
  console.log(sustantivo)
}

// CRUD PRUEBAS

//crearAdjetivos()
//crearPronombres()
//crearSustantivos()

//actualizarAdjetivo('63a2a9325a26e77fbd552887')
//actualizarPronombre('6376686a804be8d8a4974226')
//actualizarSustantivo('63a2ab6645e9324c55a4b65f')

//eliminarAdjetivo('63a2a9325a26e77fbd552887')
//eliminarPronombre('63a2a5b3d1f3bda0b2a376da')
//eliminarSustantivo('63a2ab6645e9324c55a4b65f')

mostrarPronombres()
mostrarAdjetivos()
mostrarSustantivos()