---
section: ides-and-editors
title: VS Code Desktop
---

<script context="module">
  export const prerender = true;
</script>

# {title}

> VS Code Desktop is currently in [Beta](/docs/references/gitpod-releases) · [Send feedback](https://github.com/gitpod-io/gitpod/issues/5712).

With VS Code Desktop Support, you keep your local editor configurations<sup>1</sup> and benefit from Gitpod's high-spec servers & automated prebuilds. As usual, your code executes in an ephemeral Gitpod workspace, keeping each of your projects isolated from one another.

`youtube: kI6firDA0Bw`

## Open a workspace in VS Code Desktop

There are currently two supported ways to open a VS Code Desktop session connected to a Gitpod workspace, either by choosing VS Code Desktop as your default preference, or directly from within VS Code Browser itself.

### From VS Code Browser

1. Start a new Gitpod workspace
2. Open the command palette (⇧⌘P or Ctrl+Shift+P)
3. Type "Open in VS Code" and hit Enter

You will now be redirected to VS Code Desktop.

<!-- TODO: Add image -->

### On Workspace Start

1. Navigate to your [Gitpod preferences](https://gitpod.io/preferences)
2. Select "VS Code" (without the browser label)
3. Restart any running workspaces

When the workspace starts, you will be prompted to open VS Code Desktop.

<!-- TODO: Add image -->

## Connecting to VS Code Desktop (SSH)

The three main methods granting VS Code Desktop access to your workspace are:

1. SSH Gateway access using an uploaded public SSH key (recommended)
2. SSH Gateway access using the owner token
3. Using Local Companion (legacy)

See [configure SSH](/docs/configure/ssh) for more on SSH Gateway.

> **Important:** You must first ensure that `gitpod.remote.useLocalApp` is set to `false` in your VS Code user preferences for Gitpod to connect via the two SSH Gateway methods.

### Connect to VS Code Desktop using an uploaded public SSH key

First, VS Code Desktop will check if you have already added a public SSH key to Gitpod and that the associated private key is available on your device.

If you haven't set up an SSH key with Gitpod, you can go to [gitpod.io/keys](https://gitpod.io/keys) to upload a public key. Alternatively, you can continue using the owner token approach detailed below.

<div align="center">
  <img alt="The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod" src="/images/editors/no-registered-ssh-key-for-this-machine.png" width="50%">
  <p><i>Caption: The VS Code Desktop prompt from Gitpod when opening a workspace with no SSH key found locally or uploaded to Gitpod.</i></p>
  <br />
</div>

You must have at least one public key uploaded to Gitpod, and a matching private key locally on your device to avoid this prompt. VS Code Desktop will look to find private keys in the following named files within the `.ssh` directory listed under your home directory.

- `id_dsa`
- `id_dsa`
- `id_ecdsa`
- `id_rsa`
- `id_ed25519`
- `id_xmss`
- `id_ecdsa_sk`
- `id_ed25519_sk`

### Connect to VS Code Desktop using the workspace owner token

If you cannot upload a public key to Gitpod (for whatever reason) selecting **Copy** will allow you to proceed to access your Gitpod workspace using the owner token approach. Selecting **Copy** will copy the necessary password to your clipboard to be pasted in the subsequent password prompt.

![VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy](/images/editors/enter-password-for-ssh-connection.png)
_Caption: VS Code prompting for a password. This message is shown when the public key warning notice is dismissed on the previous page by selecting Copy._

> **Note:** Gitpod previously required a local private SSH key to be stored in the default SSH directory, otherwise Gitpod would prompt for a "password". This limitation is no longer required. If not using an SSH uploaded key, you may be prompted for a password (the owner token), or asked for the passphrase associated with your SSH key.

### Connect to VS Code Desktop using Local Companion (Legacy)

If VS Code Desktop cannot connect directly via the SSH Gateway methods described above, the Local Companion approach is used as a fallback to tunnel your SSH connection. Gitpod via the VS Code Desktop plugin will download and start the Local Companion process on your behalf.

This approach is not recommended because:

1. It overwrites your [`remote.SSH.configFile`](https://code.visualstudio.com/blogs/2019/10/03/remote-ssh-tips-and-tricks) VS Code setting.
2. Downloads and starts Local Companion in a non-transparent way.
3. Is less performant than the SSH Gateway approach.

If required, you manually can force VS Code Desktop to always fallback to the Local Companion by setting the property `gitpod.remote.useLocalApp` in your user preferences to `true`.

![The VS Code Desktop Gitpod extension useLocalApp setting](/images/editors/vscode-local-app-setting.png)
_The VS Code Desktop Gitpod extension "useLocalApp" setting_

> **Deprecation Notice:** The fallback SSH connection using Local Companion for VS Code Desktop will be deprecated in a future release of Gitpod. If you cannot connect to your workspaces directly via SSH, for example, because your firewall is blocking the SSH connection, please [contact support](https://www.gitpod.io/support) with [troubleshooting logs](https://www.gitpod.io/docs/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop).

## VS Code Settings Sync

You can optionally enable Settings Sync with Gitpod to keep your extensions, themes and settings up-to-date with VS Code Browser and Desktop. See [VS Code Settings Sync](settings-sync) for more

<figure>
<img class="shadow-medium w-full rounded-xl max-w-3xl mt-x-small" alt="Enable Settings Sync with Gitpod" src="/images/editors/enable-signin-with-gitpod.png">
    <figcaption>Enable Settings Sync with Gitpod</figcaption>
</figure>

## Managing VS Code extensions

VS Code runs extensions in one of two places: locally on the UI / client side, or remotely on your Gitpod workspace.

For further details, please refer to the official VS Code docs on how to [manage extensions](https://code.visualstudio.com/docs/remote/ssh#_managing-extensions).

## Custom fonts in VS Code Desktop

The process of installing fonts matches how you typically install custom fonts locally:

1. Download the desired font to your local machine and install it locally on your operating system.
1. Open the editor's user settings (e.g. _File_ > _Preferences_ > _Settings_ > _User_)
1. Configure your font with the `editor.fontFamily` setting:
   ```json
   {
     "editor.fontFamily": "Your custom font name"
   }
   ```

## FAQs

### When opening VS Code Destkop, the owner token wasn't copied to my clipboard, where can I find it?

When opening VS Code Desktop, if you are being prompted for the owner token password, but cannot copy it to clipboard, you can find the password on the gitpod [workspaces page](https://gitpod.io/workspaces) under "connect via SSH".

![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection.png)
_The password prompt in VS Code Desktop for the owner token_

![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard.png)
_Accessing the owner token string manually from the Gitpod dashboard_

> **Note:** Pattern of the owner token is: `user#password@host`

### How do I know whether I'm connecting to VS Code Desktop via Local Companion or SSH Gateway?

If you're unsure whether you're connecting via the local companion, or SSH Gateway approach, when connected to your Gitpod workspace, VS Code Desktop will show the connection host in the bottom left.

- **SSH Gateway** - `SSH: workspaceid.ssh.*.gitpod.io`
- **Local Companion**: `workspaceid` (no domain)

![The SSH host information shown in the bottom left of VS Code Desktop](/images/editors/show-ssh-connection-vscode.png)
_The SSH host information shown in the bottom left of VS Code Desktop_

### I'm being prompted for a password/passphrase but VS Code Desktop cannot authenticate?

The owner token prompt and passphrase prompt in VS Code Desktop can look similar, however require different inputs. If you're seeing a failure to connect it could be you are using the incorrect authentication method, e.g. pasting an owner token for a passphrase, or vice versa.

1. **Owner token** - If the password prompt in VS Code Desktop asks `Enter password for workspace@\*.gitpod.io`, this prompt is for the owner token of the workspace, not the passphrase associated with your SSH key.

![The password prompt in VS Code Desktop for the owner token](/images/editors/enter-password-for-ssh-connection.png)
_The password prompt in VS Code Desktop for the owner token_

![Accessing the owner token string manually from the Gitpod dashboard](/images/editors/connect-via-ssh-dashboard.png)
_Accessing the owner token string manually from the Gitpod dashboard_

2. **SSH key Passphrase** - If your SSH key has a "passphrase" associated with the SSH key (it is not required for SSH keys), you'll need to enter your passphrase. If your public key has no passphrase, you should not see the passphrase prompt.

![Passphrase prompt from VS Code requiring the SSH key passphrase](/images/editors/enter-passphrase-for-ssh.png)
_Passphrase prompt from VS Code requiring the SSH key passphrase_

> **Note:** If you cannot remember your passphrase, consider creating a new SSH key and uploading the new key to Gitpod.

## Troubleshooting

If you are still having issues connecting to VS Code Desktop from Gitpod, try:

1. Checking your Gitpod VS Code Desktop extension version is using the latest version.
2. Attempt to directly connect via SSH using the `-v` to show verbose SSH logs. For example: `ssh -v workspacename@hostname`. You can find the `ssh` command in the workspace list on your Gitpod dashboard, see the [command-line](/docs/ides-and-editors/command-line) docs for more.
3. If you're a self-hosted customer, ensure [SSH Gateway](/docs/configure/ssh) is configured correctly.

If you are still experiencing issues using VS Code Desktop and Gitpod, please [contact support](/support) with any related [troubleshooting logs](/docs/troubleshooting#gitpod-logs-in-vs-code-web-and-desktop)
