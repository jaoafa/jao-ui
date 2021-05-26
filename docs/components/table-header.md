## TableHeader

`j-table-header` コンポーネントは、表のヘッダーのコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`headers`|`array`|`[]`|ヘッダーのカラムとなる配列を指定します。<br> `label` : カラムの表示名(必須)<br> `key` : カラムのキー(必須)<br> `sortable` : ソート可能項目であるか|
|`sort-by`|`string`|`''`|ソートする項目を指定します。|
|`sort-order`|`string`|`'asc'`|ソートする順番を指定します。 `asc` 、 `desc` のどちらかを指定します。|

### Events

|Name|Description|
|:--|:--|
|`click`|ソート可能な項目がクリックされたときに発生するイベントです。|
