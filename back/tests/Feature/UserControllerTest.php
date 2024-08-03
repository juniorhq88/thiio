<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Laravel\Sanctum\Sanctum;
use Tests\TestCase;

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test the index method.
     *
     * @return void
     */
    public function testListUsers()
    {
        $user = User::factory()->create();

        Sanctum::actingAs($user, ['*']);
        // Crear algunos usuarios en la base de datos
        User::factory()->count(3)->create();

        Sanctum::actingAs($user, ['*']);

        // Hacer una solicitud GET a /api/users
        $response = $this->getJson('/api/users');

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que el conteo de usuarios sea 3
        $response->assertJsonCount(4);
    }

    /**
     * Test the store method.
     *
     * @return void
     */
    public function testStoreAUser()
    {
        $user = User::factory()->create();

        Sanctum::actingAs($user, ['*']);

        // Datos de prueba
        $data = [
            'name' => 'Test User',
            'email' => 'testing@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ];

        // Hacer una solicitud POST a /api/users
        $response = $this->postJson('/api/users', $data);

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(201);

        // Verificar que el usuario haya sido creado
        $this->assertDatabaseHas('users', [
            'email' => 'testing@example.com',
        ]);
    }

    /**
     * Test the show method.
     *
     * @return void
     */
    public function testShowAUser()
    {
        // Crear un usuario
        $user = User::factory()->create();

        Sanctum::actingAs($user, ['*']);
        // Hacer una solicitud GET a /api/users/{id}
        $response = $this->getJson("/api/users/{$user->id}");

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que los datos del usuario sean correctos
        $response->assertJson([
            'status' => 'success',
            'user' => [
                'id' => $user->id,
                'email' => $user->email,
            ],
        ]);
    }

    /**
     * Test the update method.
     *
     * @return void
     */
    public function testUpdateAUser()
    {
        // Crear un usuario
        $user = User::factory()->create();

        Sanctum::actingAs($user, ['*']);

        // Datos de actualización
        $data = [
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ];

        // Hacer una solicitud PUT a /api/users/{id}
        $response = $this->putJson("/api/users/{$user->id}", $data);

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que los datos del usuario hayan sido actualizados
        $this->assertDatabaseHas('users', [
            'id' => $user->id,
            'name' => 'Updated Name',
            'email' => 'updated@example.com',
        ]);
    }

    /**
     * Test the destroy method.
     *
     * @return void
     */
    public function testDestroyAUser()
    {
        // Crear un usuario
        $user = User::factory()->create();

        Sanctum::actingAs($user, ['*']);

        // Hacer una solicitud DELETE a /api/users/{id}
        $response = $this->deleteJson("/api/users/{$user->id}");

        // Verificar que la respuesta sea exitosa
        $response->assertStatus(200);

        // Verificar que el usuario haya sido eliminado
        $this->assertDatabaseMissing('users', [
            'id' => $user->id,
        ]);
    }
}
