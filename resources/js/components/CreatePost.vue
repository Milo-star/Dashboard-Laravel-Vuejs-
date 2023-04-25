<template>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" rounded>Create</v-btn>
      </template>

      <v-card>
        <v-card-text>
            <v-form>
                <v-text-field label="Title" />
                <v-text-field label="Slug" />
                <v-textarea label="Content" />
                <v-btn color="primary" @click="dialog = false">Create</v-btn>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>

import { ref } from 'vue'

const dialog = ref(false)

</script>