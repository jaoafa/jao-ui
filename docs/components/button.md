# Button

`j-button` コンポーネントは、ボタンのコンポーネントです。

## Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'primary'`|指定された色をボタンに適用します。|
|`disabled`|`boolean`|`false`|ボタンをクリックできないようにします。|
|`href`|`string`|`null`|タグを `<a>` にし、 `href` 属性を追加します。|
|`icon`|`boolean`|`false`|ボタンをアイコンとして指定し、形状を円形にします。|
|`loading`|`boolean`|`false`|ローディングアニメーションを表示します。|
|`nuxt`|`boolean`|`false`|タグを `<nuxt-link>` にします。|
|`outlined`|`boolean`|`false`|背景を透明にし、枠線を追加します。|
|`size`|`string`|`'medium'`|指定された大きさをボタンに適用します。 `large` 、 `medium` 、 `small` の3サイズがあります。|
|`tag`|`string`|`'button'`|指定されたタグをボタンに適用します。|
|`to`|`string`|`null`|ボタンを `<router-link>` にし、 `to` Prop を適用します。|

## Events

|Name|Description|
|:--|:--|
|`click`|コンポーネントがクリックされたときに発生するイベントです。|

## Slots

|Name|Description|
|:--|:--|
|`default`|ボタンのテキストです。|
