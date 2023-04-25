<?php 

namespace Database\Factories;

use illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory {

    protected $model = \App\Models\Post::class;

    public function definition():array{
        return [
            'title' => $this->faker->sentence(),
            'body' => $this->faker->text(1000),
            'slug' => $this->faker->unique()->slug(),
        ];
    }
}