import type { MenuEntry } from "$lib/types/menu-entry.type";
import { M } from "../menu";

const version = "22.04/";

export const MENU: MenuEntry[] = [
  M(`Introduction`, `${version}`),
  M(`Quickstart`, `${version}quickstart`),
  M(`Getting Started`, `${version}getting-started`),
  M(`Configure`, `${version}configure`, [
    M(`.gitpod.yml`, `${version}config-gitpod-file`),
    // Why is this side bar name different to the title / URL?
    M(`Docker`, `${version}config-docker`),
    M(`Start Tasks`, `${version}config-start-tasks`),
    M(`Ports`, `${version}config-ports`),
    M(`Prebuilds`, `${version}prebuilds`),
    M(`Environment Variables`, `${version}environment-variables`),
    M(`Network Bridging`, `${version}configure/tailscale`),
    M(`Workspace Location`, `${version}checkout-location`),
    M(`Browser Settings`, `${version}configure/browser-settings`),
    M(`Dotfiles`, `${version}config-dotfiles`, []),
    M(`SSH`, `${version}configure/ssh`),
    M(`Multi-Repo`, `${version}multi-repo-workspaces`, [], `beta`),
  ]),
  M(`Develop`, `${version}develop`, [
    M(`One workspace per task`, `${version}workspaces`),
    M(`Life of a workspace`, `${version}life-of-workspace`),
    M(`Contexts`, `${version}context-urls`),
    M(`Collaboration & Sharing`, `${version}sharing-and-collaboration`),
    M(`Teams & Projects`, `${version}teams-and-projects`, [], `beta`),
    M(`Team Billing`, `${version}team-billing`, [], `beta`),
    M(`Create a Team Plan`, `${version}teams`, []),
  ]),
  M(`IDEs & Editors`, `${version}ides-and-editors`, [
    M(`VS Code Browser`, `${version}ides-and-editors/vscode-browser`),
    M(`VS Code Desktop`, `${version}ides-and-editors/vscode`, [], `beta`),
    M(`IntelliJ IDEA`, `${version}ides-and-editors/intellij`, [], `beta`),
    M(`GoLand`, `${version}ides-and-editors/goland`, [], `beta`),
    M(`PhpStorm`, `i${version}des-and-editors/phpstorm`, [], `beta`),
    M(`PyCharm`, `${version}ides-and-editors/pycharm`, [], `beta`),
    M(`CLion`, `${version}ides-and-editors/clion`, [], `soon`),
    M(`Rider`, `${version}ides-and-editors/rider`, [], `soon`),
    M(`RubyMine`, `${version}ides-and-editors/rubymine`, [], `soon`),
    M(`WebStorm`, `${version}ides-and-editors/webstorm`, [], `soon`),
    M(
      `Local Companion`,
      `${version}ides-and-editors/local-companion`,
      [],
      `beta`
    ),
    M(
      `JetBrains Gateway`,
      `${version}ides-and-editors/jetbrains-gateway`,
      [],
      `beta`
    ),
    M(`VS Code Extensions`, `${version}ides-and-editors/vscode-extensions`),
    M(`VS Code Settings Sync`, `${version}ides-and-editors/settings-sync`),
    M(`Command Line (SSH)`, `${version}ides-and-editors/command-line`, []),
    M(`FAQs`, `${version}ides-and-editors/faqs`, []),
  ]),
];
