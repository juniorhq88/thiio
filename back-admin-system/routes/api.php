<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Support\Facades\Route;

Route::post('login', [AuthController::class, 'signin'])->name('api.login');
Route::post('register', [AuthController::class, 'signup'])->name('api.register');
Route::middleware('auth:sanctum')->group(function () {
    Route::resource('/users', UserController::class);
});
