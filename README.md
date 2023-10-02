Registrační formulář

V projektu připraveném v tomto repozitáři vytvořte React komponentu Registration, která bude představovat registrační formulář do nějaké webové aplikace, viz obrázek.

Formulář

Stylování komponenty řešit nemusíte.

    Vytvořte složku src/components a založte v ní komponentu Registration.
    V komponentě vytvořte jeden stav user. Ve stavu bude objekt reprezentující všechan data ve formuláři. Objekt bude mít následující strukturu:

    {
       username: '',
       email: '',
       password: '',
       passwordConfirm: '',
    }

    Provažte obsah formuláře se stavem user.
    Budeme chtít, aby se ve formuláři automaticky vyplnilo políčko User Name, pokud je User Name prázdné a pokud uživatel zadá validní email. Validní email poznáme tak, že obsahuje zavináč. Do User Name se pak vyplní část emailu před zavináčem.
    Tlačítko pro odeslání formuláře nechť vypíše stavový objekt do konzole.


**DŮLEŽITÉ:**
**Zvolil jsem Vite balíček. Spuštění je přes npm run dev**
