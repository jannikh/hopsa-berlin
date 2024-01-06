xcopy src\CNAME docs\ /y
robocopy ./src/styles ./docs/styles /MIR
call npx tailwindcss -i ./src/styles/tailwind.css -o ./docs/styles/tailwind.css
eleventy --serve