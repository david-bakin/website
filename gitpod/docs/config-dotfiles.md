---
section: configure
title: Dotfiles
---

<script context="module">
  export const prerender = true;
</script>

# {title}

Dotfiles are a way to customize your developer environment according to your personal needs.

To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in [your user preferences](https://gitpod.io/preferences).

Gitpod will recognize and run one of the following install scripts from your dotfiles repository.

- install.sh
- install
- bootstrap.sh
- bootstrap
- script/bootstrap
- setup.sh
- setup
- script/setup

Important notes about dotfiles and install script:

- Dotfiles installation is done before the [`before:`](/docs/config-start-tasks#prebuild-and-new-workspaces) task spec every time you launch a workspace, the IDE will not start until your install script exits or automatic files linking is done.
- Install script will be terminated if it exceeds 120 seconds.
  > **Hack**: You can start a command in a subprocess to bypass this for long running commands. For example:
  >
  > `sudo apt-get install -y cowsay &`
- Make sure to make your installation script executable with `chmod 755 <install-script-name>.sh` before committing and pushing to your dotfiles repository.
- If there is no install script, your dotfiles will be symlinked into `/home/gitpod`.
- The dotfiles repository installation logs are saved to `~/.dotfiles.logs`.
- Your dotfiles repository is cloned to `~/.dotfiles`.
  Make sure to make your installation script executable with `chmod 755 <install-script-name>.sh` before committing and pushing to your dotfiles repository.

If there is no install script, your dotfiles will be symlinked into `/home/gitpod`.

## Example

> You Can Refer this [demo-dotfiles template](https://github.com/gitpod-io/demo-dotfiles) to Bring your dotfiles to Gitpod.

The example below has just one dotfile called `.bash_aliases`. If this file is present in a workspace home directory, it will be found by the '.bashrc' startup script in the Gitpod default image, so no additional install script is required.

**.bash_aliases**

```sh
echo Hello Gitpod
echo Here is my .bash_aliases dotfile

alias gitsha='git rev-parse HEAD'
```

### Troubleshooting

The dotfiles repository installation logs are saved to `/home/gitpod/.dotfiles.log` and can be viewed via

```bash
cat /home/gitpod/.dotfiles.log
```
