console.log("JS03 Session");

// ------------- Block Declaration -------------
/*
Las variables declaradas con let y const solo 
tendran alcance (scope) dentro del bloque
o bloques anidados.

{
  bloque anidado
  si una vriable local tiene el mismo
  nombre de una variable global o de bloque
  superior, la variable local oculta las otras
  variables, para que la variable local sea usada

}

*/
{
  let name = "Nick";
  const surname = "Walser";
  let ageNick = 25,
    ageSergio = 39;
  let numCohortNick = 26;
  let numCohortSergio = 26;

  {
    let name = "Sergio";
    const surname = "Torres";
    console.log(`My name is ${name} ${surname}`);
    console.log(`Nick: ${ageNick} years`);
    console.log(`Sergio: ${ageSergio} years`);
    console.log(`Cohort Nick: ${numCohortNick}`);
    console.log(`Cohort Sergio: ${numCohortSergio}`);
  }
  console.log(`My name is ${name} ${surname}`);
  console.log(`Nick: ${ageNick} years`);
  console.log(`Sergio: ${ageSergio} years`);
  console.log(`Cohort Nick: ${numCohortNick}`);
  console.log(`Cohort Sergio: ${numCohortSergio}`);
}
// console.log(`My name is ${name} ${surname}`);
// console.log(`Nick: ${ageNick} years`);
// console.log(`Sergio: ${ageSergio} years`);
