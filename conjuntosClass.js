class Conjunto{
    coleccion = [];
    
    // constructor(colect){
    //     this.coleccion = colect;
    // }

    tiene(elemento){
        return (this.coleccion.indexOf(elemento) !== -1);
    }

    // valida si existe un elemento en el conjunto y regresa VERDADERO o FALSO
    
    valores(){
        return this.coleccion;
    }
    
    agregar(elemento){
             
        if (!this.tiene(elemento)) {
            this.coleccion.push(elemento);
            return true;
            
        }
        return false;
    
    }
    
    
    eliminar(elemento){
        if(this.tiene(elemento)){
            let ind = this.coleccion.indexOf(elemento);
            this.coleccion.splice(indexOf, 1);
            return true;
        }
        return false;
    }   
    
    
    tamanio(){
        return coleccion.length;
    }

    union(otroConjunto){
        let conjuntoUnion = new Conjunto();
        let primerConjunto = this.valores();
        let segundoConjunto = otroConjunto.valores();

        primerConjunto.forEach(e => {
            conjuntoUnion.agregar(e);
        });

        segundoConjunto.forEach(e  => {
            conjuntoUnion.agregar(e);
        });
        return conjuntoUnion;
    }
    interseccion(otroConjunto){
        let conjuntoInterseccion = new Conjunto();
        let primerConjunto = this.valores();
        primerConjunto.forEach(e => {
            if(otroConjunto.tiene(e)){
                conjuntoInterseccion.agregar(e);
            }
        });
        return conjuntoInterseccion;
    }
     diferencia(otroConjunto){
        let conjuntoDiferencia = new Conjunto();
        let primerConjunto = this.valores();
        primerConjunto.forEach(e => {
            if(!otroConjunto.tiene(e)){
                conjuntoDiferencia.agregar(e);
            }
        });
        return conjuntoDiferencia;
     }

}

let conjunto1 = new Conjunto();
let conjunto2 = new Conjunto();

conjunto1.agregar(1);
conjunto1.agregar(2);
conjunto1.agregar(3);
conjunto1.agregar(4);
conjunto1.agregar(5);

conjunto2.agregar(11);
conjunto2.agregar(12);
conjunto2.agregar(13);
conjunto2.agregar(14);
conjunto2.agregar(15);


let conjuntoResultado = conjunto1.union(conjunto2);
let conjunto3 = new Conjunto();
conjunto3.agregar(4);
conjunto3.agregar(5);
conjunto3.agregar(6);
conjunto3.agregar(7);
conjunto3.agregar(8);
conjunto3.agregar(9);
conjunto3.agregar(10);

let otroConjunto = conjunto3.union(conjuntoResultado);

console.log(otroConjunto.valores());

// -------- Intersección ----------------

let res = otroConjunto.interseccion(conjunto1);

console.log(res.valores());
