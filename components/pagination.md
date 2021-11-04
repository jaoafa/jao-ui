## Pagination

`j-pagination` コンポーネントは、ページネーションのコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`color`|`string`|`'primary'`|指定された色を現在選択しているページ番号に適用します。|
|`length`|`number`|`0`|ページ番号の最大値を指定します。|
|`page`|`number`|`0`|現在選択しているページ番号を指定します。|
|`total-visible`|`number`|`0`|表示するページ番号の数を指定します。|

### Events

|Name|Description|
|:--|:--|
|`input`|ページが選択されたときに発生するイベントです。|
