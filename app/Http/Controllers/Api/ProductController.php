<?php

namespace App\Http\Controllers\Api;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{

    public function get_products()
    {
        $products = Product::get();

        return response(compact('products'));
    }


    public function get_products_details($id)
    {
       $product = Product::find($id);

       return response(compact('product'));
    }

    public function create_product(Request $request)
    {
        $validate = $request->validate([
            'product_name'=> 'required',
            'barnd_name'=> 'required',
            'author_name'=> 'required',
            'author_contact_number'=> 'required',
            'author_email'=> 'required',
            'product_price'=> 'required',
            'product_image_url'=> 'required',
            'product_category'=> 'required',
            'product_details'=> 'required',
        ]);

        $product = new Product;

        $product->product_name= $request->product_name;
        $product->barnd_name= $request->barnd_name;
        $product->author_name= $request->author_name;
        $product->author_contact_number= $request->author_contact_number;
        $product->author_email= $request->author_email;
        $product->product_price= $request->product_price;
        $product->product_image_url= $request->product_image_url;
        $product->product_category= $request->product_category;
        $product->product_details= $request->product_details;

        $product->save();

        return response()->json(['meaasge'=>'Product Created Successfully']);


    }
}
