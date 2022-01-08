<template>
  <j-app>
    <j-app-header>
      <j-image
        class="py-3"
        height="100%"
        src="https://user-images.githubusercontent.com/23224932/114276380-51370e80-9a61-11eb-9c72-615340a4d4b8.png"
      />
      <j-spacer />
      <j-app-header-navigation
        v-model:mobile-expanded="headerMobileExpanded"
        :items="[
          {
            label: 'サーバ情報',
            id: 'server',
            children: [
              {
                label: 'はじめての方へ',
                id: 'beginners',
                href: 'https://jaoafa.com/server/beginners',
              },
              {
                label: 'サービス仕様',
                id: 'specifications',
                href: 'https://jaoafa.com/server/specifications',
              },
              {
                label: '運営者情報',
                id: 'profiles',
                href: 'https://jaoafa.com/server/profiles',
              },
              {
                label: 'サーバルール',
                id: 'rules',
                href: 'https://jaoafa.com/server/rules',
                children: [
                  {
                    label: 'Discordサーバ利用ルール',
                    id: 'discord',
                    href: 'https://jaoafa.com/server/rules/discord',
                  },
                ],
              },
              {
                label: 'ガイドライン',
                id: 'guidelines',
                href: 'https://jaoafa.com/server/guidelines',
                children: [
                  {
                    label: '鉄道・道路敷設に関するガイドライン',
                    id: 'railways',
                    href: 'https://jaoafa.com/server/guidelines/railways',
                  },
                  {
                    label: '自治体に関するガイドライン ',
                    id: 'cities',
                    href: 'https://jaoafa.com/server/guidelines/cities',
                  },
                  {
                    label: '撮影・動画配信に関するガイドライン ',
                    id: 'broadcasts',
                    href: 'https://jaoafa.com/server/guidelines/broadcasts',
                  },
                  {
                    label: 'チャットに関するガイドライン',
                    id: 'communications',
                    href: 'https://jaoafa.com/server/guidelines/communications',
                  },
                ],
              },
            ],
          },
          {
            label: 'ブログ',
            id: 'blog',
            href: 'https://jaoafa.com/blog',
          },
          {
            label: 'コミュニティ',
            id: 'community',
            children: [
              {
                label: 'ユーザ一覧',
                id: 'users',
                href: 'https://users.jaoafa.com/',
              },
              {
                label: 'Wiki',
                id: 'wiki',
                href: 'https://wiki.jaoafa.com/',
              },
              {
                label: 'Discord',
                id: 'discord',
                href: 'https://discord.com/invite/7fvwYQDaQp',
              },
            ],
          },
          {
            label: 'サポート',
            id: 'support',
            children: [
              {
                label: 'お問い合わせ',
                id: 'inquiry',
                href: 'https://aoafa.com/support/inquiry',
              },
              {
                label: 'よくあるご質問',
                id: 'faq',
                href: 'https://jaoafa.com/support/faq',
              },
            ],
          },
        ]"
      />
    </j-app-header>

    <j-app-sidebar></j-app-sidebar>

    <j-app-main>
      <j-container>
        <!-- Components -->
        <section>
          <h2 class="text-lv2">Components</h2>

          <!-- Breadcrumbs -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Breadcrumbs</h3>
            <j-breadcrumbs
              :items="[
                { label: 'Dashboard', href: '/' },
                { label: 'Page1', href: '/category' },
                { label: 'Page2', href: '/category/page', disabled: true },
              ]"
            />
          </section>

          <!-- Button -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Button</h3>
            <j-row align="center">
              <j-col>
                <j-button size="large"> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium"> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small"> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" no-decoration> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" no-decoration> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" no-decoration> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" outlined> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" outlined> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" outlined> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" outlined no-decoration>
                  Button
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" outlined no-decoration>
                  Button
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" outlined no-decoration>
                  Button
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" outlined disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" outlined disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" outlined disabled> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" outlined loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" outlined loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="small" outlined loading> Button </j-button>
              </j-col>
              <j-col>
                <j-button size="large" icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" disabled icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" disabled icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" disabled icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" loading icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" loading icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" loading icon>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" icon disabled outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" icon disabled outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" icon disabled outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="large" loading icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="medium" loading icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
              <j-col>
                <j-button size="small" loading icon outlined>
                  <j-icon>home</j-icon>
                </j-button>
              </j-col>
            </j-row>
          </section>

          <!-- Card -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Card</h3>
            <j-row>
              <j-col :cols="12" :cols-sm="6" :cols-md="4">
                <j-card class="pa-4"> カードコンポーネント </j-card>
              </j-col>
            </j-row>
          </section>

          <!-- Image -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Image</h3>
            <j-row>
              <j-col>
                <p class="text-lv5">Cover</p>
                <j-image
                  :src="sampleImage"
                  alt="Sample Image"
                  width="200px"
                  height="150px"
                />
              </j-col>
              <j-col>
                <p class="text-lv5">Contain</p>
                <j-image
                  :src="sampleImage"
                  alt="Sample Image"
                  width="200px"
                  height="150px"
                  contain
                />
              </j-col>
            </j-row>
          </section>

          <!-- Input -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Input</h3>
            <j-row>
              <j-col :cols="6">
                <j-text-field v-model:value="textField" label="TextField" />
              </j-col>
              <j-col :cols="6">
                <j-text-field
                  :value="0"
                  label="TextField"
                  type="number"
                  loading
                  required
                >
                  <template #prepend>
                    <span>text</span>
                  </template>
                  <template #prepend-inner>
                    <span>text</span>
                  </template>
                  <template #append>
                    <span>text</span>
                  </template>
                  <template #append-outer>
                    <span>text</span>
                  </template>
                </j-text-field>
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-text-field value="disabled" label="TextField" disabled />
              </j-col>
              <j-col :cols="6">
                <j-text-field value="readonly" label="TextField" readonly />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-text-field value="counter" label="TextField" counter />
              </j-col>
              <j-col :cols="6">
                <j-text-field
                  :counter-length="10"
                  value="countercounter"
                  label="TextField"
                  counter
                  error
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-text-field
                  :success-messages="[
                    '入力内容が正しいものだと確認できました。',
                    '入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。',
                  ]"
                  value="success"
                  label="TextField"
                  success
                />
              </j-col>
              <j-col :cols="6">
                <j-text-field
                  :error-messages="[
                    '入力内容が不正です。',
                    '入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。',
                  ]"
                  value="error"
                  label="TextField"
                  error
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-text-field
                  :counter-length="8"
                  :hint="[
                    'パスワードは8文字以上で入力してください。',
                    '半角英数字・記号で入力してください。',
                  ]"
                  :type="textFieldShowPassword ? 'text' : 'password'"
                  value="password"
                  label="TextField"
                  counter
                  @click:append="textFieldShowPassword = !textFieldShowPassword"
                >
                  <template #append>
                    <j-icon :size="14" class="px-2">
                      {{
                        textFieldShowPassword ? 'visibility_off' : 'visibility'
                      }}
                    </j-icon>
                  </template>
                </j-text-field>
              </j-col>
              <j-col :cols="6">
                <j-text-field
                  :hint="['テキストを入力してください。']"
                  :success-messages="[
                    '入力内容が正しいものだと確認できました。',
                  ]"
                  :error-messages="['入力内容が不正です。']"
                  value="value"
                  label="TextField"
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-textarea
                  v-model:value="textarea"
                  :counter-length="100"
                  :rows="5"
                  label="Textarea"
                  counter
                  resize
                />
              </j-col>
              <j-col :cols="6">
                <j-textarea value="textarea" label="Textarea" loading required>
                  <template #prepend>
                    <span>text</span>
                  </template>
                  <template #prepend-inner>
                    <span>text</span>
                  </template>
                  <template #append>
                    <span>text</span>
                  </template>
                  <template #append-outer>
                    <span>text</span>
                  </template>
                </j-textarea>
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-textarea value="disabled" label="Textarea" disabled />
              </j-col>
              <j-col :cols="6">
                <j-textarea value="readonly" label="Textarea" readonly />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-textarea
                  :success-messages="[
                    '入力内容が正しいものだと確認できました。',
                    '入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。入力が正しいものです。',
                  ]"
                  value="success"
                  label="Textarea"
                  success
                />
              </j-col>
              <j-col :cols="6">
                <j-textarea
                  :error-messages="[
                    '入力内容が不正です。',
                    '入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。入力に誤りがあります。',
                  ]"
                  value="error"
                  label="Textarea"
                  error
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="6">
                <j-textarea
                  :hint="['感想を自由にご記入ください。']"
                  value="hint"
                  label="Textarea"
                />
              </j-col>
              <j-col :cols="6">
                <j-textarea
                  :hint="['テキストを入力してください。']"
                  :success-messages="[
                    '入力内容が正しいものだと確認できました。',
                  ]"
                  :error-messages="['入力内容が不正です。']"
                  value="error"
                  label="Textarea"
                  error
                />
              </j-col>
            </j-row>
          </section>

          <!-- Pagination -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Pagination</h3>
            <j-pagination
              v-model:page="pagination"
              :length="20"
              :total-visible="8"
            />
          </section>

          <!-- Progress -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Progress</h3>
            <j-row>
              <j-col>
                <j-progress-circle
                  :size="48"
                  :stroke="4"
                  :indeterminate="true"
                  color="primary"
                />
              </j-col>
              <j-col>
                <j-progress-circle
                  :size="48"
                  :stroke="4"
                  :percentage="20"
                  color="secondary-100"
                />
              </j-col>
              <j-col>
                <j-progress-circle
                  :size="48"
                  :stroke="4"
                  :percentage="40"
                  color="secondary-300"
                />
              </j-col>
              <j-col>
                <j-progress-circle
                  :size="48"
                  :stroke="4"
                  :percentage="60"
                  color="secondary-500"
                />
              </j-col>
              <j-col>
                <j-progress-circle
                  :size="48"
                  :stroke="4"
                  :percentage="80"
                  color="secondary-700"
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="12">
                <j-progress-bar color="primary" indeterminate />
              </j-col>
              <j-col :cols="12">
                <j-progress-bar :percentage="20" color="secondary-100" />
              </j-col>
              <j-col :cols="12">
                <j-progress-bar :percentage="40" color="secondary-300" />
              </j-col>
              <j-col :cols="12">
                <j-progress-bar :percentage="60" color="secondary-500" />
              </j-col>
              <j-col :cols="12">
                <j-progress-bar :percentage="80" color="secondary-700" />
              </j-col>
            </j-row>
          </section>

          <!-- Sheet -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Sheet</h3>
            <j-row>
              <j-col :cols="12" :cols-sm="8" :cols-md="6" :cols-lg="4">
                <j-sheet width="100%" height="120px" color="primary" />
              </j-col>
            </j-row>
          </section>

          <!-- Table -->
          <section class="mt-8">
            <h3 class="text-lv3 mb-4">Table</h3>
            <j-row>
              <j-col :cols="12" :cols-sm="10" :cols-md="8" :cols-lg="6">
                <j-table
                  :headers="tableHeaders"
                  :items="tableItems"
                  :item-per-page="2"
                />
              </j-col>
            </j-row>
            <j-row>
              <j-col :cols="12" :cols-sm="10" :cols-md="8" :cols-lg="6">
                <j-table
                  :headers="tableHeaders"
                  :items="tableItems"
                  :item-per-page="4"
                >
                  <template #head>
                    <tr>
                      <th class="px-4 py-2">名前</th>
                      <th class="px-4 py-2">マインクラフト</th>
                      <th class="px-4 py-2">Discord</th>
                      <th class="px-4 py-2">役割</th>
                    </tr>
                  </template>
                  <template #[`item.minecraft`]="{ item }">
                    <a
                      :href="`https://users.jaoafa.com/${item.minecraft}`"
                      target="_blank"
                      rel="noopener"
                    >
                      {{ item.minecraft }}
                    </a>
                  </template>
                </j-table>
              </j-col>
            </j-row>
          </section>
        </section>
      </j-container>
    </j-app-main>
  </j-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServeDev',

  data() {
    return {
      headerMobileExpanded: false,
      sampleImage:
        'data:image/png;base64,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',
      textField: '',
      textFieldShowPassword: false,
      textarea: '',
      pagination: 5,
      tableHeaders: [
        { label: 'Name', key: 'name', sortable: true },
        { label: 'Minecraft', key: 'minecraft', sortable: true },
        { label: 'Discord', key: 'discord', sortable: true },
        { label: 'Role', key: 'role' },
      ],
      tableItems: [
        {
          name: 'Zakuro',
          minecraft: 'X4Z',
          discord: 'zakuro#4096',
          role: 'Admin',
        },
        {
          name: 'Hiratake',
          minecraft: 'Hirotaisou2012',
          discord: 'Hiratake#2012',
          role: 'Admin',
        },
        {
          name: 'Tomachi',
          minecraft: 'mine_book000',
          discord: 'tomachi#0310',
          role: 'Admin',
        },
        {
          name: 'Omelet',
          minecraft: 'X9Z',
          discord: 'Omelet#4429',
          role: 'Admin',
        },
        {
          name: 'Kohona',
          minecraft: 'kohonayoshi',
          discord: 'kohonayoshi#0153',
          role: 'Moderator',
        },
        {
          name: 'Ekusas',
          minecraft: 'Ekusas83',
          discord: 'ekusas#8352',
          role: 'Moderator',
        },
        {
          name: 'Zozokasu',
          minecraft: 'X5Z',
          discord: 'Zokasu#8216',
          role: 'Moderator',
        },
      ],
    }
  },
})
</script>
