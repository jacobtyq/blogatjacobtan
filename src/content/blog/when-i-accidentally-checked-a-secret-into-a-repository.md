---
title: When I accidentally checked a secret into a repository
pubDate: 2020-09-12
description: That moment when you forget to add your env files into .gitignore...
cover: /images/when-i-accidentally-checked-a-secret-into-a-repository/Aejg4rJ28.jpeg
---

> That moment when you forget to add your env files into .gitignore...

![When I accidentally checked a secret into a repository](/images/when-i-accidentally-checked-a-secret-into-a-repository/Aejg4rJ28.jpeg)

Just the other day, I was wrapping up a remote pair-programming session with a colleague and I had to check the code in to GitHub.

By habit, I did the following:

    $ git add .
    $ git commit -m 'Inital Commit'
    $ git push origin HEAD

Then went about my day before my colleague picked up on the mistake I made - I had checked in a `.env` file unwittingly.

A `.env` file is what developers typically use to store variables, in this case sensitive data like API keys or Passwords, when developing locally to pass into an application environment. Typically, you have an accompanying `.gitignore` file that contains a list of files or folders that Git will explicitly ignore. However, we didn't have one in this project.

I panicked at the thought of how a security audit would have auditors breathing down my neck if we had let this slip.

With Git, you cannot just remove or replace the file as it would be still available in your Git history, you need to also purge it from your repository history to ensure that it is unreachable. If you have worked with Git long enough, you understand how tricky it is to rewrite history, especially when files have been committed and pushed on a remote branch.

Thanks to Google and [Github's documentation,](https://docs.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository) I discovered that I could completely remove a file from a repository - using `git filter-branch`.

### git filter-branch

`git filter-branch` is a feature to help with rewriting branches.

    git filter-branch --force --index-filter "git rm --cached --ignore-unmatch <PATH_TO_FILE_TO_DELETE>" --prune-empty --tag-name-filter cat -- --all

Breaking down the command, we get:

`—- force`

To force git filter-branch to start without having an existing temporary directory

`—— index-filter`

One of the filters we can use. This is for rewriting index, and commonly used with the next command.

`"git rm —cached —ignore-unmatch <PATH_TO_FILE_TO_DELETE>"`

Completely remove any history of the file.`—ignore-unmatch` here basically ignores when the file is entered into Git history.

`—-prune-empty`

Since we are removing a file, there might be commits that were made that introduces this file to the repository. After removing this file, the commit will be empty. This command removes any empty commits.

`-tag-name-filter cat -- --all`

Filters all the references and rewrites all branches and tags.

![When I accidentally checked a secret into a repository](/images/when-i-accidentally-checked-a-secret-into-a-repository/sBbMawPWL.png)

Making your problems go away, one git command at a time

GitHub's documentation also recommends using [BFG Repo-cleaner](http://rtyley.github.io/bfg-repo-cleaner/), a faster, simpler alternative to git filter-branch for removing unwanted files, but I have yet to try it.

With the offending file removed, I proceeded to add the `.gitignore` file and `.env.sample`, before pushing back to the repository.
