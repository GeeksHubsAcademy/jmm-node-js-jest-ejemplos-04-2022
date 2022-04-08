const provincias = ['Álava','Badajoz','Cáceres','Girona','Huelva','Jaén','La Rioja','Madrid','Navarra'];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
const expReg = {
    responseOK: 'Response OK',
    responseFAIL: 'Response FAIL',
    email: 'test@test.com',
    telefono: '919784852'
}
const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;
const isNull = () => null;
const isFalse = () => false;
const isTrue = () => true;
const isUndefined = () => undefined;
const arrProvincias = () => provincias;
const arrDias = () => dias;
const objExpReg = () => expReg;


module.exports.sumar = sumar;
module.exports.restar = restar;
module.exports.multiplicar = multiplicar;
module.exports.dividir = dividir;
module.exports.isNull = isNull;
module.exports.isFalse = isFalse;
module.exports.isTrue = isTrue;
module.exports.isUndefined = isUndefined;
module.exports.arrProvincias = arrProvincias;
module.exports.arrDias = arrDias;
module.exports.objExpReg = objExpReg;
