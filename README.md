## [uncc-acm.com](http://uncc-acm.com)

A website for the UNC Charlotte ACM student chapter.

### Project Commands

```
npm run ...
```
- `dev` - Start the server in development mode.
- `build` - Generate a bundle to the `dist/` directory.
- `start` - Start the server in production mode.

### How to Contribute

1. [Create a GitHub account.](https://github.com/join)
2. Go to [github.com/uncc-acm/uncc-acm.com](https://github.com/uncc-acm/uncc-acm.com).
3. Click the **Fork** button in the top, right hand corner of the page.
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
  1. First, go to `https://github.com/your-username/uncc-acm.com`.
  3. Click the green **New Pull Request**.
  5. Click **Create Pull Request**.
  6. Enter in a message and you are good to go.
18. Take a breath. I know this is a lot if you have never seen any of these programs before.
  - If you need help you can email Nick Breaton, technical lead, at [nick@breaton.com](mailto:nick@breaton.com).
19. Good luck and thanks for the help.
