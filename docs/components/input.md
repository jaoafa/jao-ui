## Input

`j-input` コンポーネントは、入力のコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'primary'`|指定された色を装飾に適用します。|
|`error`|`boolean`|`false`|エラー表示にします。|
|`error-messages`|`array`|`[]`|指定されたテキストをエラーメッセージとして表示します。|
|`hint`|`array`|`[]`|指定されたテキストをヒントメッセージとして表示します。|
|`id`|`string`|`undefined`|指定された id をラベルに適用します。|
|`label`|`string`|`undefined`|指定されたラベルをコンポーネントに適用します。|
|`loading`|`boolean`|`false`|ローディングアニメーションを表示します。|
|`required`|`boolean`|`false`|必須マークを表示します。|
|`success`|`boolean`|`false`|成功表示にします。|
|`success-messages`|`array`|`[]`|指定されたテキストを成功メッセージとして表示します。|

### Slots

|Name|Description|
|:--|:--|
|`default`|コンポーネントの中に表示するコンテンツです。|
|`footer-append`|フッターの右側に表示するコンテンツです。|
|`footer-prepend`|フッターの左側に表示するコンテンツです。|
