<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => Str::random(10),
            'email' => 'test@test.com',
            'user_role' => 0,
            'status' => 1, 
            'password' => Hash::make('123'),
        ]);

        // $this->call([
        //     OrganizationSeeder::class,
        //     ProjectSeeder::class,
        // ]);
    }
}
