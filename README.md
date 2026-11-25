# lachetquentin.github.io

Portfolio de Quentin Poullain, concepteur développeur C#, JavaScript et SQL : projets, expertise, parcours et contact, en français et en anglais.

En ligne : <https://lachetquentin.github.io/>

## Pile

- Vite, React 18 et TypeScript strict
- react-i18next avec détection de la langue (`?lang=`, choix mémorisé, navigateur)
- Une feuille de style unique avec des variables CSS, thèmes clair et sombre
- Polices auto-hébergées via Fontsource (Bricolage Grotesque, Instrument Sans), icônes lucide-react
- Vitest et Testing Library, ESLint avec typescript-eslint

## Organisation

- `src/locales/fr.json`, `src/locales/en.json` : tous les textes, avec les mêmes clés
- `src/data/*.ts` : contenu typé (projets, expertise, parcours, bandeau) qui pointe vers les clés de traduction
- `src/components/` : une section par composant
- `src/styles.css` : variables de thème, puis les styles par section
- `src/assets/projects/` : capture d'Admissions Hub
- `src/assets/avatar/` : emplacement pour une photo, vide par défaut
- `public/` : favicon et image de partage

### Ajouter une photo

Déposer une image (`.avif`, `.webp`, `.jpg` ou `.png`, carrée ou proche, 640 px de côté suffisent) dans `src/assets/avatar/`. Elle remplace automatiquement le monogramme QP dans la carte du haut de page.

### Thème et langue

Le thème suit le système tant que le visiteur n'a rien choisi, puis le choix est mémorisé. `?theme=dark` ou `?theme=light` force un thème, `?lang=en` ou `?lang=fr` force une langue.

## Commandes

```bash
npm install
npm run dev       # serveur de développement
npm test          # tests
npm run lint      # ESLint
npm run build     # vérification des types puis build dans dist/
npm run preview   # sert dist/ en local
```

## Publication

Le workflow `.github/workflows/deploy.yml` lance les tests, construit le site et le publie sur GitHub Pages à chaque push sur `master`.
Dans les réglages du dépôt, **Settings → Pages → Build and deployment → Source** doit être sur **GitHub Actions**.
