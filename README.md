Registrační formulář
V projektu připraveném v tomto repozitáři vytvořte React komponentu Registration, která bude představovat registrační formulář do nějaké webové aplikace, viz obrázek.

![obrazek](https://github.com/LipusM/registraceU1/assets/123497933/6b9a82ee-400b-4520-9587-6a249505d634)

Stylování komponenty řešit nemusíte.

1. Vytvořte složku src/components a založte v ní komponentu Registration.
2. V komponentě vytvořte jeden stav user. Ve stavu bude objekt reprezentující všechan data ve formuláři.
Objekt bude mít následující strukturu: 



    {
       username: '',
       email: '',
       password: '',
       passwordConfirm: '',
    }

    

4. Provažte obsah formuláře se stavem user.
5. Budeme chtít, aby se ve formuláři automaticky vyplnilo políčko User Name, pokud je User Name prázdné a pokud uživatel zadá validní email. Validní email poznáme tak, že obsahuje zavináč. Do User Name se pak vyplní část emailu před zavináčem.
6. Tlačítko pro odeslání formuláře nechť vypíše stavový objekt do konzole.



**DŮLEŽITÉ:**
**Zvolil jsem Vite balíček. Spuštění je přes npm run dev**
