# Password Verifier Kata

## Avant de commencer

* Vous avez le droit d'utiliser chatGPT ou autre IA, mais évitez de copier-coller le code qu'il vous donne.
* Faites une tâche à la fois. L'idée est d'avancer petit à petit, et de comprendre les concepts au fur et à mesure. Vous pouvez même faire chaque kata sur plusieurs jours !
* Testez uniquement les entrées valides. Il n'y a pas besoin de tester les entrées invalides pour ce kata.
* Créez un repo git pour chacun de ces Katas, afin de pouvoir faire du code review !

## Let's go!

Créez une fonction de vérification de mots de passe appelée "passwordVerifier()"

### Étape 1

Ajoutez les vérifications suivantes à une fonction maîtresse appelée "verify()"

* Le mot de passe doit être plus grand que 8 caractères
* Le mot de passe ne doit pas être nul
* Le mot de passe doit avoir au moins une lettre majuscule
* Le mot de passe doit avoir au moins une lettre minuscule
* Le mot de passe doit avoir au moins un chiffre
* Chacun de ces éléments doit déclencher une exception avec un message différent de votre choix

### Étape 2

Le mot de passe est OK si au moins trois des conditions précédentes sont vraies

### Étape 3

Ajoutez une fonctionnalité : le mot de passe n'est jamais OK si la condition 4 (Le mot de passe doit avoir au moins une lettre minuscule) n'est pas vrai.

### Étape 4

Ajoutez une fonctionnalité : le mot de passe est OK si au moins trois des conditions précédentes sont vraies, ou si le mot de passe est plus long que 12 caractères.
