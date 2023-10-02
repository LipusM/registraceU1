Registrační formulář

V projektu připraveném v tomto repozitáři vytvořte React komponentu Registration, která bude představovat registrační formulář do nějaké webové aplikace, viz obrázek.

![obrazek](https://github.com/LipusM/registraceU1/assets/123497933/85af2a55-4038-4d71-b093-15c708730c2c)

Vytvořte složku src/components a založte v ní komponentu Registration.
V komponentě vytvořte jeden stav user. Ve stavu bude objekt reprezentující všechan data ve formuláři. Objekt bude mít následující strukturu: 

Provažte obsah formuláře se stavem user.
Budeme chtít, aby se ve formuláři automaticky vyplnilo políčko User Name, pokud je User Name prázdné a pokud uživatel zadá validní email. Validní email poznáme tak, že obsahuje zavináč. Do User Name se pak vyplní část emailu před zavináčem.
Tlačítko pro odeslání formuláře nechť vypíše stavový objekt do konzole.
Stylování komponenty řešit nemusíte.


    {
   username: '',
   email: '',
   password: '',
   passwordConfirm: '',
}




**DŮLEŽITÉ:**
**Zvolil jsem Vite balíček. Spuštění je přes npm run dev**
