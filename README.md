# Exercices sur les composants en React

## Installation du projet

- `pnpm install`
- `pnpm run dev` pour lancer le serveur de développement

## Exercices

À chaque finalisation d'exercice, fais un commit avec le titre de l'exercice.\
Cela me permet de faire un suivi de l'avancement par exercice.\
Egalement cela te fais pratiquer GIT, à apprendre -un peu- à faire des commits régulier de ton travail.

### Exercice 0 : Le composant Section

**Objectifs** :

- Création d'un composant qui peut contenir des composants enfants

**Résultat attendu :**

Dans `App.tsx` :

```tsx
<Section id="exercice1">
  <h1>Boutique d'Archibald le Sorcier 🧙‍♂️</h1>
  <p>
    Bienvenue Aventurier, ici vous pouvez acheter divers objets et potions
    magiques pour vos aventures !
  </p>
</Section>

// Pareil pour les autres sections d'exercices présent dans le template du composant App

<Section id="exercice2">
  ...
</Section>

<Section id="exercice3">
  ...
</Section>

// Etc.
```

**Instructions** :

- Créé un dossier `components` pour ranger tous les composants que tu vas créer au fur et à mesure des exercices. **Tu peux y mettre des sous-dossier, plusieurs composants dans le même fichier ou un composant par fichier, c'est comme tu le souhaite je n'oblige rien tant que ça te paraît clair pour toi.**
- Créé un composant `Section` qui reprendra cette partie de template `<section id="exercice1" className="my-5">...</section>` sans les noeuds enfants
  - `id` doit provenir d'une propriété du composant
  - les noeuds enfants d'une section doit provenir d'une propriété `children` du composant
  - NB: `children` ne s'utilise pas comme un attribut HTML cette fois ! Revoir le cours sur ce point.

### Exercice 1 : Pimp my boutique

**Objectifs** :

- Gestion d'une propriété enfant à un composant
- Voir qu'un composant enfant peut accueillir des balises HTML ou d'autres composants React

**Résultat attendu** :

Dans `App.tsx` :

```tsx
<Section id="exercice1">
  <h1>Boutique d'Archibald le Sorcier 🧙‍♂️</h1>
  <BienvenueAventurier title="Boutique d'Archibald le Sorcier 🧙‍♂️">
    <p>
      Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses
      <u>potions magiques</u> pour vos aventures !
    </p>
  </BienvenueAventurier>
</Section>
```

**Instructions** :

- Refait un composant `<BienvenueAventurier />` comme dans le TP précédent
  - Affiche dans ton template JSX la propriété `children` à la place du paragraphe
  - A l'utilisation du composant `<BienvenueAventurier></BienvenueAventurier>`, tu pourras utiliser ce template en enfant du composant :

```tsx
<p>
  Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses
  <u>potions magiques</u> pour vos aventures !
</p>
```

### Exercice 2 : Inventoria

**Objectifs** :

- Afficher conditionnellement un composant

**Résultat attendu** :

- Cliquer sur le bouton `Ouvrir Inventoria` va ouvrir l'inventaire
  - Le contenu de l'inventaire sera affiché si le bouton a été cliqué
  - Sinon, il sera caché
  - Le label du bouton change en `Fermer Inventoria` si Inventoria est ouvert
- Tu auras un composant `<Inventoria>` à faire
- La condition d'affichage s'effectuera dans le rendu du composant `App` et non dans le composant `Inventoria`

**Instructions** :

- Créé un composant `<Inventoria>` qui reprend le template `<ul>...</ul>`
- Dans le composant `App`, Pour afficher l'inventaire, tu auras besoin d'un état ! Revoit les exemples sur le sujet si besoin
  - Pour cet état, un simple booléen suffit. Par défaut à `false`
  - Pour faire un état, on utilise la fonction `useState` qui nous provient de la librairie `react`
  - Transmet l'état d'ouverture d'Inventoria au composant `<Inventoria>`
- Pour la condition tu peux utiliser au choix :
  - un `if (condition) ... else`
  - un operateur ternaire `condition ? quand_vrai : quand_faux`
  - un opérateur logique `condition && ...`
  - N'hésite pas à essayer plusieurs types de conditions si tu veux expérimenter
- Utiliser une condition pour changer le label du bouton `Ouvrir Inventoria` en `Fermer Inventoria` selon l'état d'ouverture d'Inventoria

### Exercice 3 : La boutique de Potion

**Objectifs** :

- Appliquer les concepts des précédents exercices
- Faire un rendu de liste

**Résultat attendu** :

Dans `App.tsx` (avant le rendu de liste) :

```tsx
<Section id="exercice3">
  <PotionShop title="Boutique de potion">
    <Potion title="Potion de soin" />
  </PotionShop>
</Section>
```

- Avoir autant de `<Potion title="" />` que de potions dans un tableau provenant d'une source données

**Instructions** :

- Crée les composants nécéssaires pour atteindre le résultat attendu avant le rendu de liste
- Importe les données provenant du fichier `data/potion.ts` dans le composant `App`
- Utilise la méthode `map` sur la data importée qui est de type `Array<string>` pour transformer la liste de noms de potions en liste de composants `<Potion title="" />` et l'afficher dans le template JSX

### Exercice 4 : Ajouter des potions dans Inventoria

**Objectifs** :

- Communiquer entre un composant enfant et un composant parent

**Résultat attendu** :

- Cliquer sur le bouton `Ajouter à Inventoria` va ajouter la potion dans l'inventaire (juste afficher le nom de la potion dans le `<li>` d'Inventoria)

**Instructions** :

**Partie 1 : Etat pour stocker la liste des potions d'Inventoria**

Dans `App.tsx` :

- Il te faudra un état avec la fonction `useState` pour stocker les potions qui seront affiché dans Inventoria
  - Tu pourras initialiser cet état avec un tableau vide

**Partie 2 : Passer à Inventoria la liste des potions**

Dans `App.tsx` :

- Transmet la liste des potions en tant que prop du composant `Inventoria`, que tu peux nommer `potions` ou `list`
- Fait un rendu de la liste dans `Inventoria`
  - N'oublie pas de faire une condition si la liste est vide ! Pour garder l'état d'Inventoria s'il n'y a pas de potion et montrer à l'utilisateur qu'Inventoria est vide

**Partie 3 : Fonction de rappel pour permettre de transmettre l'information de la potion à ajouter de `<Potion>` au parent `<App>`**

- Il faudra ajouter une prop au composant `Potion`, que tu peux nommer `onAddToInventoria`, `onAdd` ou `onClick`, le nom est arbitraire, nomme de telle sorte à ce que tu comprennes
  - Cette prop, depuis l'utilisation du composant, on y passera une fonction de rappel
  - Dans le composant `Potion`, tu lancera cette fonction de rappel en passant en argument le nom de la potion, lorsqu'il y aura un clic sur le bouton `Ajouter à Inventoria`
  - Il te faut donc lier l'évènement clic d'un bouton avec la prop `onClick` sur l'élément `<button></button>`
  - **Attention** : Passer ta fonction contenu dans la prop `onAddToInventoria` directement ne fonctionnera pas comme tu l'attends, car `onClick` passera l'objet de l'évènement en argument de ta fonction de rappel et non le nom de la potion !
  - Il faudra donc définir et transmettre une fonction de rappel (anonyme ou nommée, comme tu veux) à la prop `onClick`. Dans le corps de cette fonction, tu pourras à ce moment là exécuter ta propre fonction de rappel `onAddToInventoria` et en passant le nom de la potion
- Utilise ta prop `onAddToInventoria` dans l'utilisation de ton composant `Potion` pour exécuter une fonction de rappel

**Partie 4 : Implémenter la fonction de rappel de `<Potion>` pour mettre à jour la liste des potions dans à afficher dans `Inventoria`**

Dans `App.tsx` :

- Utilise la prop `onAddToInventoria` en y passant une fonction de rappel, lors de l'exécution de cette fonction de rappel, tu pourras mettre à jour la liste des potions avec la nouvelle potion qui sera passé en paramètre
- NB: On ne doit pas modifier le tableau original avec un `.push()` c'est une mauvaise pratique dans React ! On doit toujours faire en sort dans le cas des tableaux et objets qu'une nouvelle référence est passée à la fonction de la mise à jour de ton état (Revoir la partie sur le spread operator pour voir comment l'utiliser pour copier un tableau)

**And Voilà !**

### Exercice 5 : Ajouter des nouvelles potions dans la boutique

**Objectifs** :

- Utiliser un formulaire pour intérargir avec les potions de la boutique

**Résultat attendu** :

```tsx
<Section id="exercice5">
  <h2 className="mb-5">Ajout de potions</h2>
  <NewPotionForm />
</Section>
```

- Quand le formulaire est envoyé, la potion s'ajoute dans la liste de la boutique

**Instructions** :

**Partie 1 : Un nouvel état pour la liste des potions de la boutique**

Dans `App.tsx` :

- Pour pouvoir mettre à jour le composant `App` avec une nouvelle potion, il nous faudra un état
  - Tu peux l'initialiser par défaut avec les données de potions qui provient du fichier externe
  - N'oublie pas de mettre à jour la prop du composant `<Potion>` pour utiliser l'état et non plus la data externe

**Partie 2 : Rendre le formulaire fonctionnel**

Dans `<NewPotionForm />` :

- Il te faudra un état pour stocker le nom de la potion
- Il te faudra une prop `onAdd` (ou un autre nom) pour qui recevra une fonction de rappel que tu pourras exécuter pour passer le nom de la potion au composant `App`
- Lier l'évènement `onChange` et utiliser le callback pour mettre à jour l'état avec la valeur du champ de texte
  - Cette valeur se récupère via `event.target.value`, `event` est l'objet d'évènement que tu recevras en paramètre à la fonction de rappel de l'évènement `onChange`
- Lier l'évènement `onSubmit` du formulaire et y transmettre une fonction de rappel qui va :
  - Exécuter la fonction de rappel `onAdd` avec le nom de la potion contenu dans l'état
  - Vider le champ de texte en vidant l'état avec une chaîne vide (ou null ou undefined au choix...)
  - NB: Ne pas appliquer les deux points précédents si le texte est vide (sinon on va ajouter des potions avec aucun nom), ça fait partie de la validation du formulaire.

**Partie 3 : Mettre à jour la liste des potions lors d'un nouvel envoi du formulaire**

Dans `App.tsx` :

- Lier la prop `onAdd` de ton composant `<NewPotionForm />` et transmet une fonction de rappel pour mettre à jour l'état de la liste des potions

**And Voilà !**
