<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;

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

// Route::middleware('auth:sanctum');

Route::group(['middleware'=>['auth:sanctum']],function () {
    Route::get('/user', function (Request $request) {return $request->user();});
    Route::post('/logout',[AuthController::class , 'logout']);
    Route::post('/createProduct',[ProductController::class, 'create_product']);
});

Route::post('/signup',[AuthController::class , 'signup']);
Route::post('/login',[AuthController::class , 'login']);
Route::get('/getProducts',[ProductController::class, 'get_products']);
Route::get('/details/{id}',[ProductController::class, 'get_products_details']);

