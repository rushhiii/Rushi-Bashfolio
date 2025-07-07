# My Bashfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc438b2e-9f12-4bbe-987e-d36fcef20a2f/deploy-status)](https://rushi-bashfolio.netlify.app)

<!-- 

[![Netlify Status](https://img.shields.io/badge/-netlify-blue?style=for-the-badge&logo=netlify&logoColor=white
)](https://rushi-bashfolio.netlify.app)


[![Netlify Status](https://camo.githubusercontent.com/a6145c4b94f8e4789628a467c2072924522a99dccc4ffb354f208f03684ad63c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e65746c6966792d737563636573732d627269676874677265656e2e737667
)](https://rushi-bashfolio.netlify.app) -->

A **terminal-style portfolio website** built entirely using HTML, CSS, and vanilla JavaScript.  
Inspired by Unix shells and Bash prompts, this site simulates a fully interactive CLI interface where visitors can run commands to learn more about me — like `whoami`, `projects`, `socials`, `email`, and more.

<!-- 🔗 **Live Demo:** [rushi-bashfolio.netlify.app](https://rushi-bashfolio.netlify.app) -->

🔗 <b>Live Demo:</b> <a href="https://rushi-bashfolio.netlify.app" target="_blank">rushi-bashfolio.netlify.app</a>

<img src="./assets/themes.gif" width="100%"/>

## 🚀 Features

- Terminal-inspired interface (CLI simulation)
- Interactive commands (`help`, `whoami`, `neofetch`, `socials`, etc.)
- Realistic Bash prompt and typing animation
- Clean and responsive layout
- Fully client-side (no backend required)
- Optimized for deployment on Netlify


## 🛠 Commands Supported

| Command     | Description                                         |
|-------------|-----------------------------------------------------|
| `help`      | Displays all available commands                     |
| `whoami`    | Shows your name and intro bio                       |
| `socials`   | Displays your social media links                    |
| `projects`  | Lists your highlighted personal or academic projects |
| `email`     | Shows your contact email                            |
| `neofetch`  | Displays fun system info in neofetch-style layout   |
| `asciiart`  | Prints cool ASCII art                               |
| `sudo`      | Easter egg 😄                                       |
| `clear`     | Clears the screen                                   |
| `exit`      | Exits the simulated terminal                        |


## 📁 Folder Structure

```bash
rushi-bashfolio/
├── index.html        # Main terminal UI
├── css/
│   └── style.css     # All themes files
├── js/
│   ├── main.js       # Command handling and animation
│   ├── command.js    # Command output logic
│   └── caret.js      # Terminal caret blink effect
└── .gitignore        # Excludes oldJunk/ and other folders
```


## 📦 Deployment

This site is deployed via **[Netlify](https://www.netlify.com/)**. To deploy your own version:

1. Fork this repo
2. Connect to Netlify
3. Deploy from `main` branch
4. Done!

**Or deploy via [GitHub Pages](https://pages.github.com/):**

1. Fork this repo
2. Go to your repo's **Settings > Pages**
3. Set the source branch to `main` (or `master`) and root folder
4. Save and visit your GitHub


## 📚 Tutorial

Want to learn how this terminal portfolio works or build your own?  
Check out the step-by-step, divided into 6 chapters:

0. [Overview](./Tutorial/README.md)
1. [Terminal Core UI](Tutorial/01_terminal_core_ui_.md)
2. [User Input & Typing Handler](Tutorial/02_user_input___typing_handler_.md)
3. [Command Interpreter](Tutorial/03_command_interpreter_.md)
4. [Command Output Data](Tutorial/04_command_output_data_.md)
5. [Output Rendering Engine](Tutorial/05_output_rendering_engine_.md)
6. [Theme Management](Tutorial/06_theme_management_.md)

Each chapter covers a key part of the project, from UI to command logic to theming!


## ⚖️ License

This project is open-sourced under the [MIT License](LICENSE).


<!-- by [@rushhiii](https://github.com/rushhiii) -->