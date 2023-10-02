**Registrační formulář**

V projektu připraveném v tomto repozitáři vytvořte React komponentu Registration, která bude představovat registrační formulář do nějaké webové aplikace, viz obrázek.

![obrazek](https://github.com/LipusM/registraceU1/assets/123497933/f4752d7c-15fb-4fe5-9727-29ef9bed7fda)


Stylování komponenty řešit nemusíte.

    1. Vytvořte složku src/components a založte v ní komponentu Registration.
    2. V komponentě vytvořte jeden stav user. Ve stavu bude objekt reprezentující všechan data ve formuláři. Objekt bude mít následující strukturu:

    {
       username: '',
       email: '',
       password: '',
       passwordConfirm: '',
    }

3. Provažte obsah formuláře se stavem user.
4. Budeme chtít, aby se ve formuláři automaticky vyplnilo políčko User Name, pokud je User Name prázdné a pokud uživatel zadá validní email. Validní email poznáme tak, že obsahuje zavináč. Do User Name se pak vyplní část emailu před zavináčem.
5. Tlačítko pro odeslání formuláře nechť vypíše stavový objekt do konzole.

**DŮLEŽIÉ**
**Zvolil jsem Vite balíček. Spuštění je přes npm run dev**
