currentDate=$(date '+%Y-%m-%d')
hours=$(date +%H:%M)

git status

git add --all

git status

git commit -m "Upload $currentDate:$hours"

