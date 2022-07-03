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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_lugar:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        },
        citacion_dia:{
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: "2022-07-16"
        },
        citacion_hora:{
            type: DataTypes.TIME,
            allowNull: false,
            defaultValue: "10:15:00"
        },
        id_sala:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        },
        id_tipo:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        },
    })
    return Evento
}