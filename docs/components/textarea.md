## TextField

`j-textarea` コンポーネントは、テキスト入力（複数行）のコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'primary'`|指定された色を装飾に適用します。|
|`counter`|`boolean`|`false`|文字数カウンタを表示します。|
|`counter-length`|`number`|`undefined`|指定された長さを文字数カウンタに適用します。|
|`disabled`|`boolean`|`false`|入力を無効にします。|
|`error`|`boolean`|`false`|エラー表示にします。|
|`error-messages`|`array`|`[]`|指定されたテキストをエラーメッセージとして表示します。|
|`hint`|`array`|`[]`|指定されたテキストをヒントメッセージとして表示します。|
|`label`|`string`|`undefined`|指定されたラベルをコンポーネントに適用します。|
|`loading`|`boolean`|`false`|ローディングアニメーションを表示します。|
|`readonly`|`boolean`|`false`|読み取り専用状態にします。|
|`required`|`boolean`|`false`|必須マークを表示します。|
|`resize`|`boolean`|`false`|表示サイズ変更を有効にします。|
|`rows`|`number`|`3`|コンポーネントを指定された行数分表示できる高さに設定します。|
|`success`|`boolean`|`false`|成功表示にします。|
|`success-messages`|`array`|`[]`|指定されたテキストを成功メッセージとして表示します。|
|`value`|`string\|number`|`''`|現在入力している値を指定します。|

### Events

|Name|Description|
|:--|:--|
|`click:append`|`append` の内容がクリックされたときに発生するイベントです。|
|`click:append-outer`|`append-outer` の内容がクリックされたときに発生するイベントです。|
|`click:prepend`|`prepend` の内容がクリックされたときに発生するイベントです。|
|`click:prepend-inner`|`prepend-inner` の内容がクリックされたときに発生するイベントです。|
|`input`|テキストが入力されたときに発生するイベントです。|

### Slots

|Name|Description|
|:--|:--|
|`append`|コンポーネント内側の右側に表示するコンテンツです。|
|`append-outer`|コンポーネント外側の右側に表示するコンテンツです。|
|`prepend`|コンポーネント外側の左側に表示するコンテンツです。|
|`prepend-inner`|コンポーネント内側の左側に表示するコンテンツです。|
