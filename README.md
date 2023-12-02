# ukol-09-cviceni-kalkulacka

Zadání
Vytvořte si repozitář ze šablony cviceni-kalkulacka se stránkou, která obsahuje číselník a displej jednoduché kalkulačky.

Zařiďte, aby se při kliknutí na libovolné tlačítko na displeji kalkulačky objevila cifra, která je na tlačíku napsaná. Postupujte dle návodu:
Nejprve vyrobte funkci s názvem handleDigitClick. To bude posluchač, který později navěsíme na všechna tlačítka.
Váš posluchač bude mít jeden parametr představující událost. Z vlastnosti target tohoto parametru získejte tlačíko, na které bylo kliknuto. Cifru zjístíte z jeho textContent.
Jakmile znáte cifru, vložte ji jako textContent na displej kalkulačky.
Pověste váš posluchač na všechna tlačítka s ciframi.
U běžné kalkulačky mačkáním tlačítek postupně sestavujeme nějaké víceciferné číslo. Zařiďte, aby cifry na displeji přibývaly jako na běžné kalkulačce (tj. nově přidaná cifra se přidá doprava, jako je na animaci výše). Také zaříďte, aby se na displej nedalo vložit delší než devíticiferné číslo.
Bonus
Pomocí podmínky if zařiďte, aby číslo na displeji nezačínalo nulou, ledaže je tam nula samotná.
