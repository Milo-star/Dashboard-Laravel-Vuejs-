<template>
    <v-card rounded class="py-8 px-4">
        <div class="flex">
            <h1 class="flex-1">Posts</h1>
            <create-post/>
        </div>
    </v-card>

    <v-table>
    <thead>
      <tr>
        <th class="text-left">Slug</th>
        <th class="text-left">Title</th>
        <th class="text-left">Updated At</th>
        <th class="text-right">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({slug, title, updated_at}, index) in posts"
        :key="index"
      >
        <td>{{ slug }}</td>
        <td>{{ title }}</td>
        <td>{{ updated_at }}</td>
        <td class="flex justify-end items-center gap-2">
            <v-btn size="small" color="primary" icon="mdi-pencil"></v-btn>
            <v-btn size="small" color="error" icon="mdi-delete"></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>

    import { ref } from 'vue'
    import CreatePost from '../components/CreatePost.vue'

    const posts = ref([
        { slug: 'post-1', title: 'Post 1', updated_at: '2023-04-25' },
        { slug: 'post-2', title: 'Post 2', updated_at: '2023-04-25' },
        { slug: 'post-3', title: 'Post 3', updated_at: '2023-04-25' },
    ])


</script>