#Házikassza kezelő alkalmazás
####Alkalmazások fejlesztése beadandó dokumentáció: Zentai Dávid (YX063S)
##Alkalmazás rövid leírása: 
Ezzel az alkalmazással az egy háztartásban élők nyomon tudják követni a közös kasszájuk bevételeit illetve kiadásait.
##Funkcionális leírás:

#####A szoftverrel bejelentkezés nélkül
+ el tudjuk olvasni az oldal rövid bemutatását
+ regisztrálhetunk
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

Bejelentkezés nélkül elérhető:
•	Az oldal leírását tartalmazó nyitólap
•	Bejelentkezési oldal

Felhasználóként elérhető:
•	Bevételek listázása
o	Saját bevétel módosítása
o	Bevétel hozzáadása
•	Kiadások listázása
o	Saját kiadás módosítása
o	Kiadás hozzáadása
o	Saját kiadás törlése
•	Profil megtekintése
•	Kilépés a felhasználói fiókból

Adminisztátorként elérhető:
•	Felhesználó listázása
o	Felhasználó módosítása (jelszó)
o	Felhasználó törlése
o	Felhasználó hozzáadása
•	kilépés az Admin profilból
Végpontok:
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
