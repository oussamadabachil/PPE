# PPE : 

## COMPTE RENDU DE LA VIDÉO  :
### - PARTIE HTML
* Dés le début de la vidéo nous pouvons voir que le répertoire est mal crée , il n’y a pas de dossier pour le fichier CSS .
*  Il n’y a pas de gitignore et de readme.md
*  Nous pouvons remarquer que le développeur n’a pas mis de meta description  ce qui est mauvais pour le référencement 
*  L’utilisation des div qui est assez conséquentes et répétitives.
*  Les div ne sont pas reconnu dans le navigateur c’est pour ça qu’on ne doit pas trop utiliser les div . 
*  Au lieu de créer une div avec une class main il aurait du utiliser la balise main , ou utiliser un role pour cette div . 
* Encore une autre hérésie , le passage de H2 à H1.
* L’oubli de la balise form
* La balise a ne peut pas être parent d’une balise button
* La réutilisation du H1 alors que le H2 a déjà été utilisée.
* L’utilisation cette fois ci de la balise a dans le buttons
* Ligne 37 la balise div avec une class form (autant mettre une balise form)

### - PARTIE CSS  

* En CSS , le reset n’est pas complet. 
* Le reset (cette CSS à utilser):
```css
/* reset css */

html{
    font-size: 62.5%; 
/* 16px * 62,5 10.00rem */
}
body{
  font: 1.6rem sans-serif;
  line-height: 1.6;
  margin: 0;
}
*{
    box-sizing: border-box; /* 100px largeur + 10px padding + 1px border */
}
ul,ol, p,button,figure,blockquote, h1, h2, h3, address{
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
    font-style: normal;
}
button{
    background: transparent;
    font-size: inherit;
    border: 0;
}
a{
    text-decoration: none;
    color: #222;
}
img{
    display: inline-block;
    width: 100%;
    height: 100%;
    vertical-align: middle;
    object-fit: cover;
}
.material-icons{
    vertical-align: .5rem;
    font-size: 3rem;
}


```

* L’utilisation des pixel au lieu des rem .
* Évitez les tailles fixes (width:1200px et mettre un max width :  pour que la taille de la nav soit adapté à la taille de l’écran).
```css
   
   .class{
       max-width:120rem;
       font-size:1.2rem;
   }
```

### - PARTIE JS

* Premiere mettre chose à dans un fichier JS  est 
```js
    document.addEventListener("DOMContentLoaded",()=>{
        
    })
```

* Créer un objet où nous stockerons les données de l'user.
```js
  const Personnage = {
        nom: document.querySelector(".form input:first-child"),
        mot_de_passe: document.querySelector(".form input:last-child"),
  }

```

#### Par ailleurs 
J'ai utilisé la bibliotheque SweetAlert pour des popups plus designs et dynamiques

https://sweetalert2.github.io Voir
[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy").
