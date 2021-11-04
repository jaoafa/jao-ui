## Card

`j-card` コンポーネントは、カードのコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'white'`|指定された色をコンポーネントに適用します。|
|`flat`|`boolean`|`false`|コンポーネントの外側の影を削除します。|
|`height`|`string`|`undefined`|指定された高さをコンポーネントに適用します。|
|`href`|`string`|`undefined`|コンポーネントをアンカーにして `href` 属性を追加します。|
|`max-height`|`string`|`undefined`|指定された高さの最大値をコンポーネントに適用します。|
|`max-width`|`string`|`undefined`|指定された幅の最大値をコンポーネントに適用します。|
|`min-height`|`string`|`undefined`|指定された高さの最小値をコンポーネントに適用します。|
|`min-width`|`string`|`undefined`|指定された幅の最小値をコンポーネントに適用します。|
|`nuxt`|`boolean`|`false`|コンポーネントを `<nuxt-link>` にします。|
|`tag`|`string`|`'div'`|指定されたタグをコンポーネントに適用します。|
|`target`|`string`|`undefined`|指定された値を `target` 属性としてコンポーネントに追加します。|
|`tile`|`boolean`|`false`|コンポーネントの角を角丸にしないようにします。|
|`to`|`string`|`undefined`|コンポーネントを `<router-link>` にし、指定された値を `to` として適用します。|
|`width`|`string`|`undefined`|指定された幅をコンポーネントに適用します。|

### Events

|Name|Description|
|:--|:--|
|`click`|コンポーネントがクリックされたときに発生するイベントです。|

### Slots

|Name|Description|
|:--|:--|
|`default`|コンポーネントの中に表示するコンテンツです。|
