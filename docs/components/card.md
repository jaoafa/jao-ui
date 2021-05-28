## Card

`j-card` コンポーネントは、カードのコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'white'`|指定された色をカードに適用します。|
|`height`|`number\|string`|`null`|指定された高さをカードに適用します。|
|`href`|`string`|`null`|タグを `<a>` にし、 `href` 属性を追加します。|
|`max-height`|`number\|string`|`null`|指定された高さの最大値をカードに適用します。|
|`max-width`|`number\|string`|`null`|指定された幅の最大値をカードに適用します。|
|`min-height`|`number\|string`|`null`|指定された高さの最小値をカードに適用します。|
|`min-width`|`number\|string`|`null`|指定された幅の最小値をカードに適用します。|
|`nuxt`|`boolean`|`false`|タグを `<nuxt-link>` にします。|
|`tag`|`string`|`'div'`|指定されたタグをカードに適用します。|
|`target`|`string`|`null`|指定された値を `target` 属性としてコンポーネントに追加します。|
|`to`|`string`|`null`|カードを `<router-link>` にし、 `to` Prop を適用します。|
|`width`|`number\|string`|`null`|指定された幅をカードに適用します。|

### Events

|Name|Description|
|:--|:--|
|`click`|コンポーネントがクリックされたときに発生するイベントです。|

### Slots

|Name|Description|
|:--|:--|
|`default`|カードの中に表示するコンテンツです。|
