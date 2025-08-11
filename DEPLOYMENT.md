# Déploiement GitHub Actions

Ce projet utilise deux workflows GitHub Actions pour gérer le CI/CD :

## 🔄 Workflows configurés

### 1. **Build and Deploy** (`.github/workflows/build-and-deploy.yml`)
- **Déclenchement** : Push sur `main` et Pull Requests
- **Fonction** : Build + déploiement automatique sur GitHub Pages
- **Node.js** : Version 20.x uniquement (optimisé pour la production)

#### Jobs :
- **Build** : Install → Lint → Test → Build → Upload artifacts
- **Deploy** : Télécharge les artifacts → Déploie sur GitHub Pages (uniquement sur `main`)

### 2. **Node.js CI** (`.github/workflows/ci.yml`)
- **Déclenchement** : Push/PR sur `main` et `develop`
- **Fonction** : Tests de compatibilité multi-versions
- **Node.js** : Versions 18.x, 20.x, 22.x

#### Jobs :
- **Build** : Tests sur plusieurs versions de Node.js pour assurer la compatibilité

## 🚀 Processus de déploiement

### Sur chaque Push vers `main` :
1. Installation des dépendances (`npm ci`)
2. Linting du code (`npm run lint`)
3. Exécution des tests (`npm test`)
4. Build de l'application (`npm run build`)
5. Upload des artifacts vers GitHub
6. Configuration de GitHub Pages
7. Déploiement automatique

### Sur les Pull Requests :
- Même processus mais **sans déploiement**
- Permet de valider le code avant merge

## ⚙️ Configuration requise

### Dans votre repository GitHub :
1. **Settings** → **Pages**
2. **Source** : GitHub Actions
3. **Permissions** : Activer les GitHub Actions

### Variables d'environnement :
- Aucune variable custom requise
- Le workflow utilise les tokens GitHub automatiques

## 📁 Structure du build

Après le build, le dossier `dist/` contient :
```
dist/
├── index.html          # Page principale
├── assets/
│   ├── index-*.css     # Styles Tailwind compilés (~11kb)
│   └── index-*.js      # Bundle React + Vite (~189kb)
└── vite.svg           # Assets statiques
```

## 🔧 Commandes locales

```bash
# Développement
npm run dev

# Build de production (identique au CI)
npm run build

# Preview du build
npm run preview

# Linting
npm run lint

# Tests
npm test
```

## 📊 Monitoring

- **Build time** : ~600-900ms
- **Bundle size** : 
  - CSS : 11.69 kB (2.96 kB gzippé)
  - JS : 189.28 kB (59.54 kB gzippé)
- **Node.js compatibility** : 18.x, 20.x, 22.x

## 🐛 Troubleshooting

### Si le déploiement échoue :
1. Vérifier les permissions GitHub Pages
2. Contrôler les logs dans l'onglet Actions
3. Vérifier que le build local fonctionne

### Si le build échoue :
1. `npm ci` pour réinstaller les dépendances
2. `npm run lint` pour corriger les erreurs de style
3. `npm run build` pour tester localement
