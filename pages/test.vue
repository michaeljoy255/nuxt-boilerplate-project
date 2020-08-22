<script>
import PAGE_HEAD from '../constants/page-head'

export default {
  name: 'TestPage',
  layout: 'header-nav',
  head() {
    return {
      title: PAGE_HEAD.test.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: PAGE_HEAD.test.description,
        },
      ],
    }
  },
}
</script>

<template>
  <v-container>
    <h1>Test Page</h1>
  </v-container>
</template>
