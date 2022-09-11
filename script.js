/* PIRMA UŽDUOTIS
Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

"Įveskite prekės kainą";
"Ar reikalingas pristatymas į namus? (taip/ne)";
"Į kurį miestą reiks pristatyti?"

Galiausiai atspausdintų tokią informaciją:

---
1 variantas (be pristatymo)

Prekės kaina: xx.xx €
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a


---
2 variantas (su pristatymu)

Prekės kaina : xx.xx €
Pristatymas: xx.xx €
Iš viso: xx.xx €
Prekę pristatysime į "įvestas miestas" per 1-3 dienas.
*/

do {
  var kaina = parseFloat(prompt("Įveskite prekės kainą"));
} while (isNaN(kaina) || kaina < 0);
var pristatymas = confirm("Ar reikalingas pristatymas į namus? (taip/ne)");

if (pristatymas) {
  do {
    var adresas = prompt("Į kurį miestą reiks pristatyti?");
  } while (adresas == "");
  var pristatymoKaina = 3;
  console.log(`Prekės kaina: ${kaina.toFixed(2)} €
  Pristatymas:  ${pristatymoKaina.toFixed(2)} €
  Iš viso: ${(kaina + pristatymoKaina).toFixed(2)} €
  Prekę pristatysime į ${adresas} per 1-3 dienas.`);
} else {
  console.log(`Prekės kaina: ${kaina.toFixed(2)} €
  Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a`);
}
