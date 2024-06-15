<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class UserRepository implements RepositoryInterface
{
    public function all(): Collection
    {
        return User::all();
    }

    public function find(int $id)
    {
        return User::find($id);
    }

    public function getUserByEmail(string $email): User
    {
        return User::whereEmail($email)->first();
    }

    public function create(array $data)
    {
        return User::create($data);
    }

    public function update(int $id, array $data)
    {
        $user = $this->find($id);
        if ($user) {
            $user->update($data);
            return $user;
        }
        return null;
    }

    public function delete(int $id)
    {
        $user = $this->find($id);
        if ($user) {
            return $user->delete();
        }
        return null;
    }
}
