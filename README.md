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

##Végpontok:

⋅⋅⋅GET /: főoldal 
⋅⋅⋅GET /login: bejelentkezési oldal 
⋅⋅⋅POST /login: bejelntkezési adatok küldése
⋅⋅⋅GET /logout: kijelentkezés
GET /register: regiszrációs oldal
POST /register: regiszrációs adatok küldése 
GET /balance: tranzakciók listázása
GET /balance/create: tranzakció létrehozási felülete
POST /balance/create: tranzakció létrehozási adatainak küldése
GET /balance/user.id/edit: tranzakció szerkesztése
POST /balance/user.id/edit: szerkesztett tranzakció adatainak küldése
GET /balance/user.id/delete: tranzakció törlése