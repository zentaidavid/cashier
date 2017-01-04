#Házikassza kezelő alkalmazás
####Alkalmazások fejlesztése beadandó dokumentáció: Zentai Dávid (YX063S)
##Alkalmazás rövid leírása: 
Ezzel az alkalmazással az egy háztartásban élők nyomon tudják követni a közös kasszájuk bevételeit illetve kiadásait.
##Funkcionális leírás:

#####A szoftverrel bejelentkezés nélkül
+ el tudjuk olvasni az oldal rövid bemutatását
+ regisztrálhatunk

#####A szoftverrel bejelentkezés után
+ kilistázhatjuk a kassza egyenlegét
+ hozzáadhatunk, módosíthatunk és törölhetünk bevételt
+ hozzáadhatunk, módosíthatunk és törölhetünk kiadást
+ kiléphetünk felhasználói fiókunkból


##Nem funcionális leírás:
+ Felhasználóbarátság
+ Ergonómia
+ Gyors működés
+ Autentikáció
+ Autorizáció
+ Karbantartható kódok

##Oldaltérkép:

#####Bejelentkezés nélkül elérhető:
+ Az oldal leírását tartalmazó nyitólap
+ Regiszráció
+ Bejelentkezési oldal

#####Felhasználóként elérhető:
+ Tranzakciók listázása
+ Tranzakció módosítása
+ Tranzakció létrehozása
+ Tranzakció törlése
+ Kilépés a felhasználói fiókból

#####Use case diagram:
![use case](https://github.com/zentaidavid/cashier/blob/master/docs/images/usecase.png "Use case diagram")

##Végpontok:

+ GET /: főoldal 
+ GET /login: bejelentkezési oldal 
+ POST /login: bejelntkezési adatok küldése
+ GET /logout: kijelentkezés
+ GET /register: regiszrációs oldal
+ POST /register: regiszrációs adatok küldése 
+ GET /balance: tranzakciók listázása
+ GET /balance/create: tranzakció létrehozási felülete
+ POST /balance/create: tranzakció létrehozási adatainak küldése
+ GET /balance/user.id/edit: tranzakció szerkesztése
+ POST /balance/user.id/edit: szerkesztett tranzakció adatainak küldése
+ GET /balance/user.id/delete: tranzakció törlése

##Oldalképek:

#####Főoldal:
![main](https://github.com/zentaidavid/cashier/blob/master/docs/images/main.PNG "Az oldal leírása")
#####Regiszráció:
![register](https://github.com/zentaidavid/cashier/blob/master/docs/images/register.PNG "Regiszrációs oldal")
#####Bejelentkezés:
![login](https://github.com/zentaidavid/cashier/blob/master/docs/images/login.PNG "Bejelentkezési oldal")
#####Tranzakciók kilistázása:
![balance](https://github.com/zentaidavid/cashier/blob/master/docs/images/balance.PNG "Tranzakciók listájának az oldala")
#####Tranzakció létrehozása:
![balance-create](https://github.com/zentaidavid/cashier/blob/master/docs/images/balance-create.PNG "Tranzakció módosítása")
#####Tranzakció módosítása:
![balance-modify](https://github.com/zentaidavid/cashier/blob/master/docs/images/balance-modify.PNG "Új tranzakció létrehozása")

##Felhasználói dokumentáció:

#####Futtatáshoz szükséges operációs rendszer:
Tetszőleges operációs rendszer
#####A futtatáshoz szükséges hardver:
Operációs rendszerek szerint megadva
#####Egyéb követelmények:
Internet böngésző telepítése, JavaScript ajánlott
#####Program használata:
1. Böngészőben nyissuk meg a localhost:3333 -> bejön a főoldal
2. Ha még nem vagyun beregisztrálva megtehetjük a főoldalon található linkre kattintva vagy a fejlécben a regisztráció gombra kattintva
3. Kattintsunk a Bejelentkezés feliratra a bejelentkezéshez
4. A megjelenő listán elolvashatjuk az egyenleg adatait. Ezt az oldalt elérhetjük a Tranzakciók megtekintése gombra kattintva is
5. Új tranzakciót indíthatunk a Tranzakció létrehozása vagy a lista alján az Új gombra kattintva. Adjuk meg a tranzakció adatait
6. A létrehozás gombra kattintva mentsük el az adatokat
7. Hibás adatok esetén az űrlap jelezni fogja a hibát
8. Lista oldalon: Törlés gombra kattintva törölhetünk tranzakciót
9. Lista oldalon: Módosítás gombra kattintva a módosíthatjuk a tranzakció adatait
10. Tranzakció módosítás oldal: megegyezik a Tranzakció létrehozása funkcióval, csak előre láthatóak benne a recept eddigi adatai
11. Kiléphetünk az alkalmazásból a Kilépés gombra kattintva. Ekkor a főoldalra jutunk

##Kliensoldali változások:
**Tranzakció módosítása:**
+ Felsorolás szerűen lehet ezentúl a tranzakció kommentjéhez elemeket rendelni
+ Egy "X" és egy "+" gomb került a felhasználói felületen elhelyezésre, a felhasználói élmény növelése érdekében. Ezekkel lehet elemet hozzáadni egy tranzakcióhoz, illetve azt törölni.

**Tranzakció létrehozása:**
+ Máshogy figyelmeztet a rosszul, illetve hibásan kitöltött mezőkre az alkalmazás
+ Ebben az esetben a kijavításig nem lehet elküldeni az adatokat a szervernek, a küldés gomb nem kattintható
+ Nem vesznek el a hibásan kitöltött adatok mezői az oldal frissülésekor

**Törlés:**
+ A recept törlése Ajax-al működik
+ A törlés gombra kattintva párbeszédablakban megerősítést vár

**Bejelentkezés:**
+ A bejelentkezés gombra kattintva párbeszédablak ugrik fel, ahol megadhatjuk a belépéshez szükséges adatainkat
+ Hibás adatok esetén máshogy figyelmeztet az oldal mint eddig

##Az oldal teljesítményének és élményének növelése érdekében módosított illetve érintett fájlok:
#####Új:
+ smartBalance.js
+ ajaxDelete.js
+ ajaxLogin.js

#####Módosult:

**View:**
+ master.njk
+ main.njk
+ balance.njk
+ balanceCreate.njk
+ balanceEdit.njk
+ login.njk

**Contoller:**
+ BalanceController.js
+ UserController.js
+ routes.js