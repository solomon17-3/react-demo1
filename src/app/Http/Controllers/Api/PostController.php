<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post; 

class PostController extends Controller
{
    //postの一覧表示
    public function index()
    {
        $posts = Post::all();
        //postの一覧をjson形式で返却する
        return response()->json($posts, 200);
    }
}
