### websec_ui

**Commit — Prikaz poruke o zakljucanom nalogu u login formi** (`b43d6de`)

Izmenjen je `js/login.js` da prepozna HTTP `429` odgovor koji API vraca kada je nalog privremeno zakljucan. Iz tela odgovora se cita `remainingSeconds`, konvertuje u citljiv format (npr. `"1 min 30 sec"` ili `"45 sec"`), i prikazuje korisniku kao poruka o gresci. Na taj nacin UI govori korisniku koliko dugo treba da saceka pre novog pokusaja.