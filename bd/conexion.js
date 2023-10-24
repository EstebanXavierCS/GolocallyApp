var admin = require("firebase-admin");
var keys = require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});

var db=admin.firestore();
var conexion=db.collection("miejemploBD");
var conexionp=db.collection("misproductosBD");



module.exports={conexion,conexionp}