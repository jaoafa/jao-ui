## Image

`j-image` コンポーネントは、画像のコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`alt`|`string`|`''`|画像の代替テキストを設定します。|
|`contain`|`boolean`|`false`|画像が指定された大きさに収まらない場合にトリミングされないようにします。|
|`height`|`number\|string`|`null`|指定された高さを画像に適用します。|
|`max-height`|`number\|string`|`null`|指定された高さの最大値を画像に適用します。|
|`max-width`|`number\|string`|`null`|指定された幅の最大値を画像に適用します。|
|`min-height`|`number\|string`|`null`|指定された高さの最小値を画像に適用します。|
|`min-width`|`number\|string`|`null`|指定された幅の最小値を画像に適用します。|
|`sizes`|`string`|`null`|`srcset` で複数の画像サイズが与えられている場合に、画像の表示サイズを指定するためのカンマ区切りの文字列を画像に適用します。|
|`src`|`string`|`''`|画像のURLを適用します。この項目は必須です。|
|`srcset`|`string`|`null`|使用可能なソース画像のセットを示すカンマ区切りのリストです。|
|`width`|`number\|string`|`null`|指定された幅を画像に適用します。|
