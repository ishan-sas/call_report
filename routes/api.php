<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\MinutesController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RegisterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [LoginController::class, 'authenticate']);
Route::post('customer-register', [CustomerController::class, 'register']);
Route::post('store-minutes', [MinutesController::class, 'store']);
Route::put('update-purpose/{id}', [MinutesController::class, 'updatePurpose']);
Route::put('update-required-details/{id}', [MinutesController::class, 'updateRequiredDetails']);
Route::put('update-new-leads/{id}', [MinutesController::class, 'updateNewLeads']);

Route::middleware(['auth:sanctum', 'isSuperUser'])->group(function() {
    Route::get('/user', function () {
        return response()->json([
            'status' => 200,
            'message' => 'You are in'
        ], 200);
    });

    Route::get('customers', [CustomerController::class, 'index']);
    Route::get('users', [UserController::class, 'index']);
    
    Route::get('minutes', [MinutesController::class, 'index']);
    Route::get('dxfdxfx', [UserController::class, 'deactivateUser']);
    // Route::post('store-minutes', [MinutesController::class, 'store']);
    // Route::put('update-minutes/{id}', [MinutesController::class, 'update']);
    Route::post('store-records', [RecordController::class, 'store']);
    Route::put('update-records/{id}', [RecordController::class, 'update']);
});


Route::middleware(['auth:sanctum'])->group(function() {
    Route::post('/logout', [LoginController::class, 'logout']);
});

















// Route::middleware(['auth:sanctum', 'isAdminUser'])->group(function() {
//     Route::get('/admin/user', function () {
//         return response()->json([
//             'status' => 200,
//             'message' => 'You are in'
//         ], 200);
//     });
//     Route::post('/logout', [LoginController::class, 'logout']);
// });


// Route::group(['middleware' => 'auth:sanctum'], function (){
//     Route::get('/user', function (Request $request) {
//         return $request->user();    
//     });
// });