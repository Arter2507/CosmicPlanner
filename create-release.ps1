# PowerShell Script to Create GitHub Release
# This script creates a GitHub release for Cosmic Planner v1.0.2

Write-Host "🚀 Creating GitHub Release for Cosmic Planner v1.0.2" -ForegroundColor Green

# Check if GitHub CLI is available
try {
    $ghVersion = gh --version
    Write-Host "✅ GitHub CLI found: $ghVersion" -ForegroundColor Green
    
    # Create the release
    Write-Host "📝 Creating release with notes from RELEASE_NOTES.md..." -ForegroundColor Yellow
    
    gh release create v1.0.2 `
        --title "🌌 Cosmic Planner v1.0.2 - Complete Feature Release" `
        --notes-file "RELEASE_NOTES.md" `
        --latest
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Release created successfully!" -ForegroundColor Green
        Write-Host "🔗 View release at: https://github.com/Arter2507/CosmicPlanner/releases" -ForegroundColor Cyan
    } else {
        Write-Host "❌ Failed to create release. Exit code: $LASTEXITCODE" -ForegroundColor Red
    }
    
} catch {
    Write-Host "❌ GitHub CLI not found or not accessible." -ForegroundColor Red
    Write-Host "📋 Please follow the manual steps in CREATE_RELEASE.md" -ForegroundColor Yellow
    Write-Host "🔗 Or install GitHub CLI: https://cli.github.com/" -ForegroundColor Cyan
}

Write-Host "`n📋 Release Information:" -ForegroundColor Blue
Write-Host "   Tag: v1.0.2" -ForegroundColor White
Write-Host "   Title: 🌌 Cosmic Planner v1.0.2 - Complete Feature Release" -ForegroundColor White
Write-Host "   Notes: RELEASE_NOTES.md" -ForegroundColor White
Write-Host "   Repository: https://github.com/Arter2507/CosmicPlanner" -ForegroundColor White
