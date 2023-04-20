const a= true && true;
const b= true && false;
const c= false && true;
const d= false && (3==4);
const e= "cat" && "dog";
const f= false && "cat";
const g= "cat" && false;


const a1 = !true;
const b1 = !false;
const c1 = !"cat";

const tiempo =25;
let saludo;

if (tiempo<12) {
    saludo = "buenos dias";

} else if(tiempo >=12 && tiempo <=19 ){
    saludo = "Buenas tardes";

} else if (tiempo >19 && tiempo < 24){
    saludo = "buenas noches";

} else if (tiempo >24){
    saludo = "no hay hora";
}

console. log (saludo);

//switch

const dia =8;
let texto;

switch(dia ){
    case 0:
         texto = "Domingo"
         break;
    case 1:
         texto = "Lunes"
         break;
    case 2:
         texto = "Martes"
         break;
    case 3:
         texto = "Miercoles"
         break;
    case 4:
         texto = "Jueves"
         break;
    case 5:
         texto = "Viernes"     
         break;
    case 6:
         texto = "Sabado"
         break;
    default:
        texto ="dia invalido" 
}

console.log(texto);  