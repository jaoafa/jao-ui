## Table

`j-table` コンポーネントは、表のコンポーネントです。

### Props

|Name|Type|Default|Description|
|:--|:--|:--|:--|
|`headers`|`array`|`[]`|ヘッダーのカラムとなる配列を指定します。<br> `label` : カラムの表示名(必須)<br> `key` : カラムのキー(必須)<br> `sortable` : ソート可能項目であるか|
|`hide-footer`|`boolean`|`false`|表のフッターを非表示にします。|
|`hide-header`|`boolean`|`false`|表のヘッダーを非表示にします。|
|`items`|`array`|`[]`|表に表示する項目を配列で指定します。|
|`item-per-page`|`number`|`10`|1ページあたりに表示する項目の数を指定します。|
|`loading`|`boolean`|`false`|ローディングアニメーションを表示します。|
|`page`|`number`|`1`|現在選択しているページ番号を指定します。|
