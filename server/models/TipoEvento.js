module.exports=(sequelize,DataTypes)=>{

    //Datatypes me ayuda a definir los tipos de dato en la base de datos 
    const TipoEvento =  sequelize.define("TipoEvento", {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return TipoEvento

}
