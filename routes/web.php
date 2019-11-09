<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/** Routes Auth
 * 
*/
Auth::routes();
Route::get('/login', 'Auth\LoginController@index')->name('login');

/** Routes
 *  Home Application
*/
Route::get('/home', 'HomeController@index')->name('home');


/** Route SPA
 *  Router One Function the SPA
*/
Route::get('any/{any}', function ($any) {
    return $any;
})->where('any', '.*');
