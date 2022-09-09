import type { MenuEntry } from "$lib/types/menu-entry.type";
import { M } from "../menu";

const version = "";

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
    M(`Workspace Classes`, `${version}workspace-classes`, [], `beta`),
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
    M(`PhpStorm`, `${version}ides-and-editors/phpstorm`, [], `beta`),
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
  M(`Languages`, `${version}languages`, [
    M(`JavaScript`, `${version}languages/javascript`),
    M(`Python`, `${version}languages/python`),
    M(`HTML/CSS`, `${version}languages/html`),
    M(`Java`, `${version}languages/java`),
    M(`C++`, `${version}languages/cpp`),
    M(`Go`, `${version}languages/go`),
    M(`Ruby`, `${version}languages/ruby`),
    M(`PHP`, `${version}languages/php`),
    M(`Vue`, `${version}languages/vue`),
    M(`Scala`, `${version}languages/scala`),
    M(`Rust`, `${version}languages/rust`),
    M(`.NET`, `${version}languages/dotnet`),
    M(`Dart`, `${version}languages/dart`),
    M(`Julia`, `${version}languages/julia`),
    M(`LaTeX`, `${version}languages/latex`),
    M(`R`, `${version}languages/r`),
    M(`Kotlin`, `${version}languages/kotlin`),
    M(`Deno`, `${version}languages/deno`),
  ]),
  M(`Integrations`, `${version}integrations`, [
    M(`GitLab`, `${version}gitlab-integration`),
    M(`GitHub`, `${version}github-integration`),
    M(`Bitbucket`, `${version}bitbucket-integration`),
    M(`GitHub Enterprise`, `${version}github-enterprise-integration`),
    M(`Bitbucket Server`, `${version}bitbucket-server-integration`),
    M(`Browser Bookmarklet`, `${version}browser-bookmarklet`),
    M(`Browser Extension`, `${version}browser-extension`),
  ]),
  M(`Gitpod Self-Hosted`, `${version}self-hosted`, [
    M(`Installation Guides`, `${version}self-hosted/installation-guides`, [
      M(`Local Preview`, `${version}self-hosted/local-preview`, [], `beta`),
      M(
        `Reference Architectures`,
        `${version}self-hosted/reference-architecture`,
        []
      ),
      M(`Installing Gitpod`, `${version}self-hosted/installing-gitpod`),
      M(`Advanced Installation`, `${version}self-hosted/advanced`),
    ]),
    M(`Operational Guides`, `${version}self-hosted/operational-guides`, [
      M(`Updating`, `${version}self-hosted/updating`),
      M(`Monitoring`, `${version}self-hosted/monitoring`),
      M(`Backing Up`, `${version}self-hosted/backup-restore`),
    ]),
    M(`Troubleshooting`, `${version}self-hosted/troubleshooting`, [
      M(`Support Bundles`, `${version}self-hosted/support-bundle`, []),
      M(`Config Patches`, `${version}self-hosted/config-patches`, []),
    ]),
    M(`Background`, `${version}self-hosted/background`, [
      M(`Disaster Recovery`, `${version}self-hosted/disaster-recovery`),
    ]),
    M(`Reference`, `${version}self-hosted/reference`, [
      M(`Required Components`, `${version}self-hosted/required-components`),
      M(`Cluster Requirements`, `${version}self-hosted/cluster-requirements`),
      M(
        `Compatibility Matrix`,
        `${version}references/product-compatibility-matrix?admin`
      ),
      M(`Telemetry`, `${version}self-hosted/telemetry`),
      M(`Release Policies`, `${version}self-hosted/releases`),
      M(`Upgrade Guides`, `${version}self-hosted/upgrade-guides`),
    ]),
  ]),
  M(`References`, `${version}references`, [
    M(
      `Compatibility Matrix`,
      `${version}references/product-compatibility-matrix?user`
    ),
    M(`.gitpod.yml`, `${version}references/gitpod-yml`),
    M(`Command Line Interface`, `${version}command-line-interface`),
    // M(`Custom Docker image`, `references/gitpod-dockerfile`),
    // M(`Architecture`, `references/architecture`),
    M(`Roadmap`, `${version}references/roadmap`),
    M(`Gitpod Releases`, `${version}references/gitpod-releases`),
  ]),
  M(`Contribute`, `${version}contribute`, [
    M(`Content`, `${version}contribute/content`),
    M(`Documentation`, `${version}contribute/documentation`),
    M(`Features & Patches`, `${version}contribute/features-and-patches`),
  ]),
  M(`Troubleshooting`, `${version}troubleshooting`, []),
];