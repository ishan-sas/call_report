<?php

namespace App\Http\Controllers;

use App\Models\Minutes;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller {

    public function index() {
        $customers = Customer::all();
        return response()->json([
            'status'=>200,
            'customers'=>$customers
        ]);
    }


    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'validation_errors' => $request->error,
            ]);
        }else {
            if($request->email) {
                $getCustomer = Customer::where('email', $request->email)->first();
                if($getCustomer) {
                    $customerID = $getCustomer->id;
                }else {
                    $customer = Customer::create([
                        'user_id' => $request->user_id,
                        'name' => $request->name,
                        'email' => $request->email,
                        'contact_no' => $request->contact_no, 
                        'bday' => $request->bday, 
                        'family' => $request->family,
                    ]);
                    $customerID = $customer->id;
                }
            }
            else {
                $customer = Customer::create([
                    'user_id' => $request->user_id,
                    'name' => $request->name,
                    'email' => $request->email,
                    'contact_no' => $request->contact_no, 
                    'bday' => $request->bday, 
                    'family' => $request->family,
                ]);
                $customerID = $customer->id;
            }
                

            $minutes = Minutes::create([
                'user_id' => $request->user_id,
                'customer_id' => $customerID,
                'appointdate' => $request->appointdate,
                'being_visited' => $request->being_visited
            ]);

            return response()->json([
                'status' => 200,
                'minutes_id' => $minutes->id,
                'message' => 'Customer successfully registered.',
            ]);    
        }
    }
}
