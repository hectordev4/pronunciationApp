# Prompt CLI git current brach

To display the current Git branch in your Linux Mint command-line prompt, you can modify your `.bashrc` file. Here's how to do it:

1. Open your `.bashrc` file in a text editor:

```bash
nano ~/.bashrc
```

2. Add the following function to the end of the file:

```bash
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
```

3. Modify your PS1 prompt by adding the following line:

```bash
PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[33m\]\$(parse_git_branch)\[\033[00m\]\$ "
```

4. Save the file and exit the text editor.

5. Apply the changes by running:

```bash
source ~/.bashrc
```

Now, your prompt will display the current Git branch name in yellow when you're in a Git repository. The prompt will show your username, hostname, current directory, and the Git branch (if applicable).