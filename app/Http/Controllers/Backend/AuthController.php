<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //

    public function __construct() {}

    public function index() {

        // dd(Auth::id());
        return view('Backend.auth.login');
    }

    public function login(AuthRequest $request){

        $credentials =  [
            'email' => $request->input('email'),
            'password' => $request->input('password')
        ];

       if (Auth::attempt($credentials)) {
           return redirect()->route('dashboard.index')->with('success', 'Đăng nhập thành công');
        }


        return redirect()->route('auth.admin')->with('error', 'Email hoặc mật khẩu không chính xác');
    }


    // public function login(LoginRequest $request) {


    //     $data = $request-> validated();

    //     if (!Auth::attempt(($data))) {
    //         return response([
    //             'message' => 'email or password are wrong'
    //         ]);
    //     }

    //     $user = Auth::user();

    //     $token = $user -> createToken('main')->plainTextToken;
    //     return response()->json([
    //         'user' => $user,
    //         'token' => $token
    //     ]);
    // }

    // public function register(RegisterRequest $request) {

    //     $data = $request->validated();

    //     $user = User::create([
    //         'name' => $data['name'],
    //         'email' => $data['emai'],
    //         'password' => $data['password'],
    //     ]);

    //     $token = $user -> createToken('main')->plainTextToken;

    //     return response()->json([
    //         'user' => $user,
    //         'token' => $token
    //     ]);
    // }

    // public function logout(Request $request) {
    //     $user = $request->user();
    //     $user-> currentAccessToken() -> delete();
    //     return response('', 204);
    // }
}

