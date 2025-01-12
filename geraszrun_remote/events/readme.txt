ennek a strukturaja a kovetkezokeppen lesz:

eventdata.json:
-pages: integer[0:31]
-images: integer[0:31]
-texts: integer[0:31]
-image_sep: [indexek, hogy mikor melyik kep]
-text_sep: [indexek, hogy mikor melyik szoveg] # ez a ketto a redundancia miatt
-last_upd: datum string

img folder:
-itt lesznek a kepek (550x480), sorrendben, lehetoleg
index szerint szamozva (akkor lehet nem kell a sep)

texts.json: ebbe lesznek a szovegek es a linkek

a jatekba lesz egy checksum, ami komparalja az eventdata.json adatait a letoltottekhez
nem lesz fajlokban eltarolva, hanem a Globals-ba menti ha megnyitod, es torli a jatek bezarasakor.