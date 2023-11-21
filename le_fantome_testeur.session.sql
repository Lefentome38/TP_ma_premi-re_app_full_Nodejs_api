CREATE TABLE "eleves" (
  "id" integer PRIMARY KEY,
  "nom" varchar(255),
  "prenom" varchar(255)
);CREATE TABLE "eleves" (
  "id" integer PRIMARY KEY,
  "nom" varchar(255),
  "prenom" varchar(255)
);

CREATE TABLE "notes" (
  "eleve_id" integer,
  "note" integer
);

ALTER TABLE "notes" ADD FOREIGN KEY ("eleve_id") REFERENCES "eleves" ("id");

INSERT INTO eleves (id, prenom, nom)
VALUES (1, 'Amandine', 'goute'),
       (2, 'Benoit', 'ratrif'),
       (3,'Cédric', 'baudar'),
       (4,'Dorian', 'faudor'),
       (5,'Emilie', 'purti'),
       (6,'Fabien', 'harji'),
       (7,'Géraldine', 'souterre'),
       (8,'Hélène', 'curdi'),
       (9,'Isabelle', 'murtir'),
       (10,'Jérome', 'hovi'),
       (11,'Karine', 'koltor'),
       (12,'Jérome', 'tuit'),
       (13,'Isabelle', 'baudar'),
       (14,'axel', 'kouji'),
       (15,'max', 'louter'),
       (16,'max', 'vourde'),
       (17,'hérik', 'vourde'),
       (18,'mathieu', 'hourte'),
       (19,'Benoit', 'curdi'),
       (20,'loic', 'sirlot'), 
       (21,'Jérome', 'noltio'), 
       (22,'Jérome', 'korny'); 


       
INSERT INTO notes (eleve_id, note)
VALUES  (1, 10),
        (2, 2),
        (3, 9),
        (4,17),
        (5,20), 
        (6,13), 
        (7,5),
        (8,7),
        (9,8),
        (10,15),
        (11,16), 
        (12,19),
        (13,1),
        (14,11),
        (15,16), 
        (16,7),
        (17,12),
        (18,18),
        (19,9),
        (20,10),
        (21,20),
        (22,14);

    