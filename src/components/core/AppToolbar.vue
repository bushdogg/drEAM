<template>
  <v-toolbar app>
    <v-toolbar-title v-text="$t('title')"/>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        href="https://community.vuetifyjs.com"
        target="_blank"
      >
        <span v-text="$t('needHelp')" />
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
