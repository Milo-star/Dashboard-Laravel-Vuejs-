<template>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" size="small" color="error" icon="mdi-delete"></v-btn>
      </template>

      <v-card>
        <v-card-text>
            Are you sure you want to delete this post?
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>

import { ref } from 'vue'

const props = defineProps({
    post: {
        type: Number,
        required: true
    }
})

const dialog = ref(false)

const deletePost = () => {
    dialog.value = false;
}

</script>