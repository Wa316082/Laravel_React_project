<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;

class AuthController extends Controller
{
    public function login(LoginRequest $request){

    }

    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        /** @var User $user */

        $user = User::create([
            'name'=> $data['name'],
            'email'=> $data['email'],
            'password'=> $data['password'],
        ]);
    }

    public function logout(Request $request)
    {

    }
}
