# String Calculator Kata

## Avant de commencer

* Vous avez le droit d'utiliser chatGPT ou autre IA, mais évitez de copier-coller le code qu'il vous donne.
* Faites une tâche à la fois. L'idée est d'avancer petit à petit, et de comprendre les concepts au fur et à mesure. Vous pouvez même faire chaque kata sur plusieurs jours !
* Testez uniquement les entrées valides. Il n'y a pas besoin de tester les entrées invalides pour ce kata.

## Let's go

### Step 1: Les bases

Créez un simple calculateur de chaînes avec une fonction ``add(String | numbers)``.

* La fonction peut prendre jusqu'à deux nombres séparés par une virgule et va retourner leur somme. Par exemple, ``""`` ou ``"1"`` ou ``"1,2"``.
* Commencez par le cas le plus simple d'une chaîne vide et passez à 1, puis 2 nombres.

### Step 2: Gérer un nombre infini de nombres
Faites en sorte que la méthode ``add()`` puisse gérer un nombre infini de nombres.

### Step 3: Les nombres négatifs

Appeler ``add()`` avec un nombre négatif devrait lancer une exception ``"negatives not allowed"`` - et le nombre négatif qui a été passé.

Si plusieurs nombres négatifs sont passés, montrez-les tous dans le message d'exception.

### Step 6: Ignorer les grands nombres

Les nombres supérieurs à 1000 doivent être ignorés, et faire repasser le compteur à zéro. Par exemple, 2 + 1001 = 2

## General requirements

Credits to [Roy Osherove](http://osherove.com/tdd-kata-1) for the original idea.
