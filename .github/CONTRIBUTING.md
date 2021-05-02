# Contributing

Thanks for your contributions🙏  
Any contribution to jao UI is more than welcome🚀

開発に参加する場合は、本文書をお読みください。

## Reporting Issues

新機能の提案や、不具合の報告は [こちら](https://github.com/jaoafa/jao-ui/issues) に記載してください。

重複を避けるため、既に存在している Issue がないか確認をおねがいします。また、複数の問題がある場合は、それぞれ個別に追加してください。

## Pull Requests

単純な誤字や小さな変更でも、プルリクエストは大歓迎です！

### Getting Started

0. [Node.js](https://nodejs.org/) をインストールします。
1. [jao UI のリポジトリ](https://github.com/jaoafa/jao-ui) を [Fork](https://docs.github.com/ja/github/getting-started-with-github/fork-a-repo) し、ローカルへ [clone](https://docs.github.com/ja/github/creating-cloning-and-archiving-repositories/cloning-a-repository) します。
2. `npm install` を実行し、必要なパッケージをインストールします。
3. `npm run serve` を実行して開発を開始します！

### Branches

jao UI では、ブランチの運用方法として Gitflow を採用しています。  
（参考）[Gitflow ワークフロー | Atlassian Git Tutorial](https://www.atlassian.com/ja/git/tutorials/comparing-workflows/gitflow-workflow)

主なブランチは以下のものです。

- **main**: メインのブランチです。リリース時はこのブランチにマージしてタグ付けをします。
- **dev**: 開発用のブランチです。

通常の開発時には、 `dev` ブランチから新規ブランチを作成し、コードを追加・修正を行った後 `dev` ブランチへマージします。

リリース時は `release/vバージョン番号` ブランチを作成し、 `main` へマージします。開発時のブランチ名には使用しないようおねがいします。

### Linting

コードの書き方を統一するため、 [ESLint](https://eslint.org/) と [stylelint](https://stylelint.io/) を使用しています。変更をコミットする前に `npm run lint` を実行してエラーとならないことを確認してください。  
[Visual Studio Code](https://code.visualstudio.com/) を使用している場合は、拡張機能を追加することをおすすめします。

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
