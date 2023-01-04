<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{



    public function signup(SignupRequest $request)
    {
        $data = $request->validated();

        /** @var User $user */

        $user = User::create([
            'name'=> $data['name'],
            'email'=> $data['email'],
            'password'=> Hash::make( $data['password'])
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user','token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if(!Auth::attempt($credentials)){
            return response([
                'message' => 'Incorret password od email'
            ]);
        }else{
            /** @var User $user */
           $user = Auth::user();
           $token = $user->createToken('main')->plainTextToken;
        }

        return response(compact('user','token'));

    }


    public function logout(Request $request)
    {
        /** @var User $user */

        $user = $request->user();

        $user-ccurrentAccessToken()-delete();

        return response('', 204);
    }
}
