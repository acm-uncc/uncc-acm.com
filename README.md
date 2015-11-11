# uncc-acm.com
A website for the UNCC ACM Chapter

## How to Contribute

1. [Create a GitHub account.](https://github.com/join)
2. Go to [github.com/uncc-acm/uncc-acm.com](https://github.com/uncc-acm/uncc-acm.com).
3. Click the **Fork** button in the right hand corner of the page.
5. Install git by following the git installer available at [git-scm.com](https://git-scm.com/download).
6. Install Node.js by following the Node installer available at [nodejs.org](https://nodejs.org/en/).
7. Open your terminal.
  - If you are on Windows, you will need to install [Git Bash](https://git-for-windows.github.io/).
  - I will be referring to both the terminal and Git Bash as the terminal.
8. Follow [this guide](https://help.github.com/articles/generating-ssh-keys/) on how to add an SSH key to your GitHub account.
9. In the terminal, navigate to the folder that you would like to contain your copy of the ACM website.
  - Print the directory you are currently in with `pwd`.
  - Change directories with `cd [directory name]`.
10. Run the command `git clone git@github.com:[your-usename]/uncc-acm.com.git`.
  - Make sure you replace `[your-usename]` with you GitHub username.
11. Now run `cd uncc-acm.com`.
  - You are now in your copy of the ACM website.
12. Attach your fork to the actual ACM repository by running `git remote add upstream https://github.com/uncc-acm/uncc-acm.com`.
  - Now you can keep your fork up to date by following [this article](https://help.github.com/articles/syncing-a-fork/).
12. Generate your own member page by running the command `./uncc-acm member [your-name]`.
13. Start the server in development mode by running `./uncc-acm start`.
14. Navigate to `http://localhost:3000/member/[your-name]` to see your page.
15. Now that your page has been created, you need to push it back up to the GitHub server.
  1. First run `git add -A`, to add all changes.
  2. Then `git commit -m "Create my member page."`.
  3. And finally `git push`.
16. Now that your changes have been pushed to GitHub, you can view them by going to `https://github.com/your-username/uncc-acm.com.git`.
17. The final step is to add then to the official GitHub repository. This is done by creating a pull request.
  1. First, go to https://github.com/uncc-acm/uncc-acm.com.
  2. On the right hand side click on the **Pull Request** button.
  3. Click **New Pull Request**.
  3. Then click on **compare across forks**.
  4. Change the head fork to `your-name/uncc-acm` and leave the base fork `uncc-acm/uncc-acm.com`.
  5. Click **Create Pull Request**.
  6. Enter in a message and you are good to go.
18. Take a breath. I know this is a lot if you have never seen any of these programs before.
  - If you need help you can email Nick Breaton, technical lead, at [nick@breaton.com](mailto:nick@breaton.com).
19. Good luck and thanks for the help.

## Project Commands

```
npm run ...
```
- `start` - Start the server in production mode.
- `dev` - Start the server in development mode.
- `member [name]` - Create a new member layout.
- `member remove [name]` - Delete an existing member layout.

i.e.
`npm run member norm` - Will create a new member with the name *norm*.

## Project Structure

```
.
├── assets .................. Contains all files served at /assets/
├── build ................... Contains all built files. Will also be served from /assets/.
├── members ................. Contains all members.
│   └── member-name ......... A specific member module.
│       ├── server
│       │   └── index.js .... Must return an express route element.
│       ├── styles
│       │   └── index.scss .. Must be the root of all styles for that member.
│       └── views ........... Contains all views for the member.
│           └── index.html
├── package.json ............ Declare Node and NPM configuration.
├── public .................. Contains all files served at /.
├── scripts ................. [x] Scripts will be bundled and uglified for client.
├── server .................. Contains all server-side logic.
│   ├── config.js ........... Express instance configuration.
│   ├── index.js ............ Root script by Node.
│   └── routes .............. Contains all route declarations.
├── styles
│   └── index.scss .......... Is the root style file.
├── tasks ................... Contains commands run by uncc-acm script.
├── templates ............... Contains code used to generate more code.
├── tests ................... [x] Contains all unit tests.
├── uncc-acm ................ A script to easily run project commands.
└── views ................... All .html files are run through the Handlebars engine.
    ├── home.html
    ├── index.html .......... The base file for all other rendered views.
    └── notfound.html

[x] = not implemented
```
