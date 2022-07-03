module.exports=(sequelize,DataTypes)=>{


//Datatypes me ayuda a definir los tipos de dato en la base de datos 
    const Evento =  sequelize.define("Evento", {
        titulo:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_usuario:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "John Doe"
        },
    })
    return Evento
}