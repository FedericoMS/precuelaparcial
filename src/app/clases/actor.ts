export class Actor {

    id: number;
    nombre : string;
    apellido : string;
    edad : string;
    sexo : string;
    nombrePais : string;
    banderaPais : string;

    constructor(id: number, nombre : string, apellido : string, edad : string, sexo : string, nombrePais : string, banderaPais : string)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.sexo = sexo;
        this.nombrePais = nombrePais;
        this.banderaPais = banderaPais;
    }

    

}
