<?php 

namespace Database\Seeders;

use illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder {

    public function run() {
        Post::factory()->count(100)->create();
    }
}