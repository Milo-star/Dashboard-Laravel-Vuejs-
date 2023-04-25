<template>
    <header class="bg-indigo-900 text-white">
        <nav class="container mc-auto flex justify-center items-center gap-4 ">
            <router-link :to="{name: 'home'}">Home</router-link>
            <router-link :to="{name: 'about'}">About</router-link>
        </nav>
    </header>
    <main class="h-screen bg-rose-500/20">
        <router-view></router-view>
    </main>
</template>