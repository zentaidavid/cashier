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

#####Végpontok:

GET /: főoldal 
GET /login: bejelentkezési oldal 
POST /login: bejelntkezési adatok küldése 
GET /profile: profil jelszó változtatása 
POST /profile: profil jelszó módosítása 
GET /proceeds: bevételek listázása 
GET /proceeds/modify: bevétel módosítása 
POST /proceeds/modify: bevétel módosított adatainak küldése 
GET /proceeds/create: új bevétel hozzáadása 
POST /proceeds/create: új bevétel adatainak küldése 
GET /expenditure: kiadások listázása 
GET /expenditure/modify: kiadások módosítása 
POST /expenditure/modify: kiadások módosított adatainak elküldése 
GET /expenditure/create: új kiadás hozzáadása 
POST /expenditure/create: új kiadás adatainak küldése 
POST /expenditure/delete: kiadás törlése 
GET /users: felhasználók listázása 
GET /users/modify: felhasználó adatainak módosítása 
POST /users/modify: felhasználó módosított adatainak elküldése 
GET /users/create: új felhasználó hozzáadása 
POST /users/create: új felhasználó adatainak küldése 
POST /users/delete: felhasználó törlése 
POST /logout: kijelentkezés
Oldalvázlatok:
