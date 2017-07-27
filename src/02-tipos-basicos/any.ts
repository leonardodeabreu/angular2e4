let valorStringAny: any = "primeira variavel any";

console.log(valorStringAny);

valorStringAny = false;
console.log(valorStringAny);


valorStringAny = ["primeiro", 2, false, new Date()];
console.log("Exemplo for each");
valorStringAny.forEach((valor:any) => {
    console.log(valorStringAny);
});