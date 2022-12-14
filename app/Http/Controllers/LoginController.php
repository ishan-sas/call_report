<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|min:3',
        ]);

        if($validator->fails()){
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }
        else {
            //$user = User::where('email', $request->email)->first();
            $user = User::where([
                ['email', '=', $request->email],
                ['status', '=', 1]
            ])->first();

            if(! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'No. Invalid credentials'
                ]);
            }
            else {
                if($user->user_role === 0) {
                    $token = $user->createToken($user->email.'_SuperUsertoken', ['server:superUser'])->plainTextToken;
                }
                if($user->user_role === 1) {
                    $token = $user->createToken($user->email.'_AdminUsertoken', ['server:adminUser'])->plainTextToken;
                }
                else {
                    $token = $user->createToken($user->email.'_token')->plainTextToken;
                }
                
                return response()->json([
                    'status' => 200,
                    'username' => $user->name,
                    'profileid' => $user->id,
                    'token' => $token,
                    'usertype' => $user->user_role,
                    'message' => 'Done. Logged in successfully.',
                ]);
            }
        }
    }


    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            'status' => 200,
            'message' => 'Logged out successfully.',
        ]);
    }
}
