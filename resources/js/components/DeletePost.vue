<template>
    <v-dialog v-model="dialog" max-width="500">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props" rounded>Create</v-btn>
      </template>

      <v-card>
        <v-card-text>
            <v-form>
                <v-text-field v-model="inputs.title" label="Title" />
                <v-text-field v-model="inputs.slug" label="Slug" />
                <v-textarea v-model="inputs.body" label="Article" />
                <v-btn color="primary" @click="createPost">Create</v-btn>
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
        type: Object,
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

    inputs.title = props.post.title
    inputs.slug = props.post.slug
    inputs.body = props.post.body
})
const updatePost = () => {
    dialog.value = false;
}

onMounted(() => {
    inputs.title = props.post.title
    inputs.slug = props.post.slug
    inputs.body = props.post.body
}

</script>