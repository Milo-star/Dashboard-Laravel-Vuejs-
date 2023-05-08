<template>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ props }">
        <v-btn size="small" v-bind="props" color="primary" icon="mdi-pencil"></v-btn>
      </template>

      <v-card>
        <v-card-text>
            <v-form>
                <v-text-field v-model="inputs.title" label="Title" />
                <v-text-field v-model="inputs.slug" label="Slug" />
                <v-textarea v-model="inputs.body" label="Article" />
                <v-btn block color="primary" @click="updatePost">Update</v-btn>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script setup>

import { onMounted, reactive, ref, watch } from 'vue'

const props = defineProps({
    post: {
        type: Number,
        required: true
    }
})

const dialog = ref(false)

const inputs = reactive({
    title: "",
    slug: "",
    body: "",
})

watch (() => dialog, (value) => {
    if (!value) return;
})

const updatePost = () => {
    dialog.value = false;
}

</script>