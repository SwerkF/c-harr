# c-harr ⭐

> Quand c'est harr, faut lâcher une larme 🥲

Une application React moderne construite avec Vite et Tailwind CSS.

## 🚀 Technologies utilisées

- **React** - Bibliothèque UI
- **Vite** - Build tool rapide et moderne  
- **Tailwind CSS** - Framework CSS utilitaire
- **GitHub Actions** - CI/CD automatique

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/SwerkF/c-harr.git
cd c-harr

# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev
```

## 🛠️ Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🚢 Déploiement

L'application se déploie automatiquement sur GitHub Pages via GitHub Actions lors des pushs sur la branche `main`.

### Workflows GitHub Actions :
- **🚀 Build and Deploy** : Build + déploiement automatique (Node.js 20.x)
- **🔄 Node.js CI** : Tests de compatibilité (Node.js 18.x, 20.x, 22.x)

> 📖 Consultez [DEPLOYMENT.md](./DEPLOYMENT.md) pour plus de détails

## 📁 Structure du projet

```
c-harr/
├── src/
│   ├── App.jsx          # Composant principal
│   ├── index.css        # Styles Tailwind
│   └── main.jsx         # Point d'entrée
├── public/              # Assets publics
├── .github/workflows/   # Configuration GitHub Actions
├── tailwind.config.js   # Configuration Tailwind
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances et scripts
```
