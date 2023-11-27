class Negocio{
    constructor(id,data){
        this.bandera=0;
        this.id=id;
        this.nombre=data.nombre;   
        this.ubi=data.ubi;   
        this.desc=data.desc;
        this.tel=data.tel;  
        this.prod=data.prod; 
        this.foto=data.foto;   
        this.userid=data.userid;
        this.calificacion=data.calificacion||0; 
        this.usuariosCalificacion = data.usuariosCalificacion || [];
    }
    set id(id){
        if(id!=null)
        id.length>0?this._id=id:bandera=1;
    }

    set nombre(nombre){
        nombre.length>0?this._nombre=nombre:this.bandera=1;
    }
    
    set ubi(ubi){
        ubi.length>0?this._ubi=ubi:this.bandera=1;
    }

    set desc(desc){
        desc.length>0?this._desc=desc:this.bandera=1;
    }

    set tel(tel){
        tel.length>0?this._tel=tel:this.bandera=1;
    }

    set prod(prod){
        prod.length>0?this._prod=prod:this.bandera=1;
    }

    set foto(foto){
        foto.length>0?this._foto=foto:this.bandera=1;
    }

    set userid(userid){
        userid.length>0?this._userid=userid:this.bandera=1;
    }

    set calificacion(calificacion) {
        this._calificacion = !isNaN(calificacion) ? parseFloat(calificacion) : this.bandera = 1;
    }
    

    get id(){
        return this._id;
    }

    get nombre(){
        return this._nombre;
    }

    get ubi(){
        return this._ubi;
    }

    get desc(){
        return this._desc;
    }

    get tel(){
        return this._tel;
    }

    get prod(){
        return this._prod;
    }

    get foto(){
        return this._foto;
    }
    get userid(){
        return this._userid;
    }
    get calificacion(){
        return this._calificacion;
    }

    
    get obtenerDatos(){
        if(this._id==null){
            return {
                nombre:this.nombre,
                ubi:this.ubi,
                desc:this.desc,
                tel:this.tel,
                prod:this.prod,
                foto:this.foto,
                userid:this.userid,
                calificacion:this.calificacion,
                usuariosCalificacion:this.usuariosCalificacion
            }
        }else{
            return{
                id:this.id,
                nombre:this.nombre,
                ubi:this.ubi,
                desc:this.desc,
                tel:this.tel,
                prod:this.prod,
                foto:this.foto ,
                userid:this.userid,
                calificacion:this.calificacion,
                usuariosCalificacion:this.usuariosCalificacion
            }
        }

    }
}

module.exports=Negocio;