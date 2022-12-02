<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index() {
        $users = DB::table('users')->where([
            ['status', '=', '1'],
        ])->get();
        //$users = User::all();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
    }

    public function editProfile($id) {
        $profileData = User::find($id);
        if($profileData) {
            return response()->json([
                'status' => 200,
                'profile_data' => $profileData,
            ]);
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'No user ID found.!',
            ]);
        }
    }

    public function updateProfile(Request $request, $id) {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages(),
            ]);
        }
        else {
            $profile = User::find($id);
            if($profile) {
                $profile->name = $request->input('name');
                $profile->email = $request->input('email');
                $profile->save();
                return response()->json([
                    'status' => 200,
                    'message' => 'Profile updated successfully.',
                ]);
            }
            else {
                return response()->json([
                    'status' => 404,
                    'message' => 'No user ID found.',
                ]);
            } 
        }
    }

    public function deactivateUser() {
        $users = DB::table('users')->where([
            ['status', '=', '1'],
        ])->get();
        //$users = User::all();
        return response()->json([
            'status'=>200,
            'users'=>$users
        ]);
        // $user = User::find($id);
        // if($user) {
        //     $user->status = 0;
        //     $user->save();

        //     return response()->json([
        //         'status' => 200,
        //         'message' => 'User account deactivated.!'
        //     ]);
        // }
        // else {
        //     return response()->json([
        //         'status' => 404,
        //         'message' => 'User account not found.!'
        //     ]);
        // }
    }
}
