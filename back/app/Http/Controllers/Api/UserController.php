<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Models\User;
use App\Repositories\UserRepository;

class UserController extends Controller
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = $this->userRepository->all();

        return response()->json($users);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateUserRequest $request)
    {
        $data = $request->all();
        $user = $this->userRepository->create($data);

        return response()->json([
            'status' => 'success',
            'user' => $user,
            'message' => 'User created successfully',
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {
        $user = $this->userRepository->find($user->id);

        return response()->json([
            'status' => 'success',
            'user' => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        $data = $request->all();
        $this->userRepository->update($user->id, $data);

        return response()->json([
            'status' => 'success',
            'user' => $this->userRepository->find($user->id),
            'message' => 'User updated successfully',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        $this->userRepository->delete($user->id);

        return response()->json([
            'status' => 'success',
            'message' => 'User deleted successfully',
        ]);
    }
}
