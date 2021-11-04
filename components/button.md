## Button

`j-button` コンポーネントは、ボタンのコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'primary'`|指定された色をコンポーネントに適用します。|
|`disabled`|`boolean`|`false`|コンポーネントをクリックできないようにします。|
|`href`|`string`|`undefined`|コンポーネントをアンカーにして `href` 属性を追加します。|
|`icon`|`boolean`|`false`|コンポーネントをアイコンとして指定し、形状を円形にします。|
|`loading`|`boolean`|`false`|ローディングアニメーションを表示します。|
|`no-decoration`|`boolean`|`false`|装飾を削除します。|
|`nuxt`|`boolean`|`false`|コンポーネントを `<nuxt-link>` にします。|
|`outlined`|`boolean`|`false`|背景を透明にし、枠線を追加します。|
|`size`|`string`|`'medium'`|指定された大きさをコンポーネントに適用します。 `large` 、 `medium` 、 `small` の3サイズがあります。|
|`tag`|`string`|`'button'`|指定されたタグをコンポーネントに適用します。|
|`target`|`string`|`undefined`|指定された値を `target` 属性としてコンポーネントに追加します。|
|`to`|`string`|`undefined`|コンポーネントを `<router-link>` にし、指定された値を `to` として適用します。|

### Events

|Name|Description|
|:--|:--|
|`click`|コンポーネントがクリックされたときに発生するイベントです。|

### Slots

|Name|Description|
|:--|:--|
|`default`|コンポーネントの中に表示するコンテンツです。|
