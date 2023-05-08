<template>
    <v-card rounded class="py-8 px-4">
        <div class="flex">
            <h1 class="flex-1">Home</h1>
        </div>
    </v-card>

    <v-progress-linear color="blue-lighten-3" indeterminate :height="2"></v-progress-linear>

    <v-timeline>
        <v-timeline-item size="large">
        <template v-slot:icon>
            <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
            <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="text-h5">
            Lorem ipsum
            </v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
        </v-timeline-item>
    </v-timeline>

    <v-timeline>
        <v-timeline-item size="large">
        <template v-slot:icon>
            <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
            <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="text-h5">
            Lorem ipsum
            </v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
        </v-timeline-item>
    </v-timeline>

    <v-timeline>
        <v-timeline-item size="large">
        <template v-slot:icon>
            <v-avatar image="https://i.pravatar.cc/64"></v-avatar>
        </template>
        <template v-slot:opposite>
            <span>Tus eu perfecto</span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="text-h5">
            Lorem ipsum
            </v-card-title>
            <v-card-text>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-card-text>
        </v-card>
        </v-timeline-item>
    </v-timeline>

    
</template>