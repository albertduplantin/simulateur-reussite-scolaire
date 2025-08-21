# Script de déploiement automatique pour GitHub Pages
# Exécutez ce script depuis PowerShell dans le répertoire du projet

Write-Host "🚀 Démarrage du déploiement automatique..." -ForegroundColor Green

# Vérifier si on est dans le bon répertoire
if (!(Test-Path "index.html")) {
    Write-Host "❌ Erreur: fichier index.html non trouvé. Êtes-vous dans le bon répertoire?" -ForegroundColor Red
    exit 1
}

# Vérifier l'authentification GitHub CLI
Write-Host "🔐 Vérification de l'authentification GitHub..." -ForegroundColor Yellow
$authStatus = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Vous n'êtes pas connecté à GitHub CLI." -ForegroundColor Red
    Write-Host "Exécutez: gh auth login" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Authentification GitHub OK" -ForegroundColor Green

# Ajouter tous les fichiers
Write-Host "📁 Ajout des fichiers..." -ForegroundColor Yellow
git add .

# Vérifier s'il y a des changements
$status = git status --porcelain
if ([string]::IsNullOrEmpty($status)) {
    Write-Host "ℹ️ Aucun changement à commiter" -ForegroundColor Blue
} else {
    Write-Host "📝 Changements détectés, création du commit..." -ForegroundColor Yellow
    git commit -m "Deploy: Mise à jour automatique avec workflow GitHub Actions"
}

# Pousser vers GitHub
Write-Host "🔄 Push vers GitHub..." -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Déploiement réussi!" -ForegroundColor Green
    Write-Host "🌐 Votre site sera disponible à: https://albertduplantin.github.io/simulateur-reussite-scolaire/" -ForegroundColor Cyan
    Write-Host "⏱️ Le déploiement peut prendre 2-5 minutes" -ForegroundColor Yellow
    
    # Ouvrir le repository dans le navigateur
    Write-Host "🌍 Ouverture du repository..." -ForegroundColor Yellow
    gh repo view --web
} else {
    Write-Host "❌ Erreur lors du push" -ForegroundColor Red
    exit 1
}

Write-Host "`n🎉 Script terminé! Vérifiez l'onglet Actions sur GitHub pour suivre le déploiement." -ForegroundColor Green
