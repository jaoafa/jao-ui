import{_ as t,c as e,o as d,a as l}from"./app.74721cac.js";const p='{"title":"TextField","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slots","slug":"slots"}],"relativePath":"components/textarea.md","lastUpdated":1641569267742}',a={},o=l('<h1 id="textfield" tabindex="-1">TextField <a class="header-anchor" href="#textfield" aria-hidden="true">#</a></h1><p><code>j-textarea</code> \u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306F\u3001\u30C6\u30AD\u30B9\u30C8\u5165\u529B\uFF08\u8907\u6570\u884C\uFF09\u306E\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3067\u3059\u3002</p><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Default</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>color</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>&#39;primary&#39;</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u8272\u3092\u88C5\u98FE\u306B\u9069\u7528\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>counter</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u6587\u5B57\u6570\u30AB\u30A6\u30F3\u30BF\u3092\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>counter-length</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u9577\u3055\u3092\u6587\u5B57\u6570\u30AB\u30A6\u30F3\u30BF\u306B\u9069\u7528\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>disabled</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u5165\u529B\u3092\u7121\u52B9\u306B\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>error</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u30A8\u30E9\u30FC\u8868\u793A\u306B\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>error-messages</code></td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u30A8\u30E9\u30FC\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>hint</code></td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u30D2\u30F3\u30C8\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>label</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;"><code>undefined</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u30E9\u30D9\u30EB\u3092\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u306B\u9069\u7528\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>loading</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u30ED\u30FC\u30C7\u30A3\u30F3\u30B0\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u3092\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>readonly</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u8AAD\u307F\u53D6\u308A\u5C02\u7528\u72B6\u614B\u306B\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>required</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u5FC5\u9808\u30DE\u30FC\u30AF\u3092\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>resize</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u8868\u793A\u30B5\u30A4\u30BA\u5909\u66F4\u3092\u6709\u52B9\u306B\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>rows</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;"><code>3</code></td><td style="text-align:left;">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3092\u6307\u5B9A\u3055\u308C\u305F\u884C\u6570\u5206\u8868\u793A\u3067\u304D\u308B\u9AD8\u3055\u306B\u8A2D\u5B9A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>success</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;"><code>false</code></td><td style="text-align:left;">\u6210\u529F\u8868\u793A\u306B\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>success-messages</code></td><td style="text-align:left;"><code>array</code></td><td style="text-align:left;"><code>[]</code></td><td style="text-align:left;">\u6307\u5B9A\u3055\u308C\u305F\u30C6\u30AD\u30B9\u30C8\u3092\u6210\u529F\u30E1\u30C3\u30BB\u30FC\u30B8\u3068\u3057\u3066\u8868\u793A\u3057\u307E\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>value</code></td><td style="text-align:left;"><code>string|number</code></td><td style="text-align:left;"><code>&#39;&#39;</code></td><td style="text-align:left;">\u73FE\u5728\u5165\u529B\u3057\u3066\u3044\u308B\u5024\u3092\u6307\u5B9A\u3057\u307E\u3059\u3002</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>click:append</code></td><td style="text-align:left;"><code>append</code> \u306E\u5185\u5BB9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>click:append-outer</code></td><td style="text-align:left;"><code>append-outer</code> \u306E\u5185\u5BB9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>click:prepend</code></td><td style="text-align:left;"><code>prepend</code> \u306E\u5185\u5BB9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>click:prepend-inner</code></td><td style="text-align:left;"><code>prepend-inner</code> \u306E\u5185\u5BB9\u304C\u30AF\u30EA\u30C3\u30AF\u3055\u308C\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>input</code></td><td style="text-align:left;">\u30C6\u30AD\u30B9\u30C8\u304C\u5165\u529B\u3055\u308C\u305F\u3068\u304D\u306B\u767A\u751F\u3059\u308B\u30A4\u30D9\u30F3\u30C8\u3067\u3059\u3002</td></tr></tbody></table><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>append</code></td><td style="text-align:left;">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u5074\u306E\u53F3\u5074\u306B\u8868\u793A\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>append-outer</code></td><td style="text-align:left;">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5916\u5074\u306E\u53F3\u5074\u306B\u8868\u793A\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>prepend</code></td><td style="text-align:left;">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5916\u5074\u306E\u5DE6\u5074\u306B\u8868\u793A\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059\u3002</td></tr><tr><td style="text-align:left;"><code>prepend-inner</code></td><td style="text-align:left;">\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u5185\u5074\u306E\u5DE6\u5074\u306B\u8868\u793A\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\u3067\u3059\u3002</td></tr></tbody></table>',8),c=[o];function n(s,i,r,f,x,y){return d(),e("div",null,c)}var h=t(a,[["render",n]]);export{p as __pageData,h as default};
