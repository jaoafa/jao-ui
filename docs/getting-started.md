# Getting Started

## Vite Install

[Vite](https://ja.vitejs.dev/) のプロジェクトで jao UI を使用する方法について説明します。

プロジェクトを作成していない場合は、以下のコマンドを実行することで作成することができます。コマンド実行後は、画面の指示に従ってください。

```bash
$ npm init vite@latest
```

次に、 `npm` や `Yarn` を使って jao UI をインストールします。

**npm を使用する場合**：

```bash
$ npm install @jaoafa/jao-ui
```

**Yarn を使用する場合**：

```bash
$ yarn add @jaoafa/jao-ui
```

最後に、 jao UI をアプリケーションに追加します。 `src/main.ts` もしくは `src/main.js` を次のように書き換え、使用するプラグインとして追加します。

```typescript
import { createApp } from 'vue'
import jaoUI from '@jaoafa/jao-ui'
import App from './App.vue'
import '@jaoafa/jao-ui/dist/style.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(jaoUI)
app.mount('#app')
```

## Vue CLI Install

[Vue CLI](https://cli.vuejs.org/) のプロジェクトで jao UI を使用する方法について説明します。

::: tip 互換性について
jao UI は [Vue 3](https://v3.ja.vuejs.org/) にのみ対応しています。 Vue 2 以下のバージョンでは使用できません。
:::

プロジェクトを作成していない場合は、以下コマンドを実行することで作成することができます。コマンド実行後は、画面の指示に従ってください。

```bash
$ vue create project-name
```

次に、 `npm` や `Yarn` を使って jao UI をインストールします。

**npm を使用する場合**：

```bash
$ npm install @jaoafa/jao-ui
```

**Yarn を使用する場合**：

```bash
$ yarn add @jaoafa/jao-ui
```

最後に、 jao UI をアプリケーションに追加します。 `src/main.js` を次のように書き換え、使用するプラグインとして追加します。

```typescript
import { createApp } from 'vue'
import jaoUI from '@jaoafa/jao-ui'
import App from './App.vue'
import '@jaoafa/jao-ui/dist/style.css'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(jaoUI)
app.mount('#app')
```
