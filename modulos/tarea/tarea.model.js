var mongoose = require('mongoose');
const { map } = require('./tarea.routes');
var Schema = mongoose.Schema;


var estatusTarea = {
    values: ['ACTIVA', 'BORRADA', 'OCULTA'],
    message: '{VALUE} no es un estatus valido'
};
var estadoTarea = {
    values: ['BORRADOR', 'SIN_ASIGNAR', 'ASIGNADO', 'TERMINADA', 'PROCESO', 'APROBANDO','CANCELADA'],
    message: '{VALUE} no es un estatus valido'
};


var TareaSchema = new Schema({
    nombreCliente: String,
    estado:  { type: String, enum: estadoTarea, default: 'BORRADOR' },
    fecha : {  type: Date, default: Date.now },
    estatus:  { type: String, enum: estatusTarea, default: 'ACTIVA' },
    tipo: String,

    objetos:[String],
    fotos:[String],
    fotosAdicionales: [String],
    notas: [String],
    firma:{ type: String},

    direccion: String,
    geolocation:{ latitud: Number, longitud: Number},
    descuento:{ type: String},
    duracion:{ type: String},
    hora:{ type: String},
    fechaAvaluo: {type: Date, default:Date.now()},
    metodoPago:{ type: String},

    tipoAvaluo: String, //Casa, Departamento, Bodega
    
    costo: Number,
    total:{ type: String},
    checklist: [{type: String}],
    owner : {  type: Schema.Types.ObjectId, ref: 'Usuario', required: false },
    usuario : {  type: Schema.Types.ObjectId, ref: 'Usuario', required: false },
});


module.exports = mongoose.model('Tarea', TareaSchema);
module.exports.estatusTarea = estatusTarea;
module.exports.estadoTarea = estadoTarea;