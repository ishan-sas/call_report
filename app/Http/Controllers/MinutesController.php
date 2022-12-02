<?php

namespace App\Http\Controllers;

use App\Models\Minutes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class MinutesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $minutes = Minutes::all();
        return response()->json([
            'status'=>200,
            'minutes'=>$minutes
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            //'goals' => 'required',
        ]);

        if($validator->fails()) {
            return response()->json([
                'validation_errors' => $validator->messages(),
            ]);
        }else {
            $minutes = Minutes::create([
                'user_id' => auth()->id(),
                'customer_id' => $request->customer_id,
                'goals' => $request->goals,
                'acc_changes' => $request->acc_changes, 
                'rmu_history' => $request->rmu_history, 
                'cus_budget' => $request->cus_budget,
                'product_fabric' => $request->product_fabric,
                'required_quotes' => $request->required_quotes,
                'pricing_changes' => $request->pricing_changes,
                'special_promotion' => $request->special_promotion,
                'virtual_opportunity' => $request->virtual_opportunity,
                'lead_possibility' => $request->lead_possibility,
                'is_coverd_tbs' => $request->is_coverd_tbs,
                'next_meet_date' => $request->next_meet_date,
                'next_meet_location' => $request->next_meet_location,
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'Minutes successfully added.',
            ]);    
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updatePurpose(Request $request, $id)
    {
        $minute = Minutes::find($id);
        if($minute) {
            $minute->goals = $request->input('goals');
            $minute->acc_changes = $request->input('acc_changes');
            $minute->rmu_history = $request->input('rmu_history');
            $minute->cus_budget = $request->input('cus_budget');
            $minute->save();
            return response()->json([
                'status' => 200,
                'message' => 'Purpose data updated.',
            ]);
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'Purpose data update is failed.',
            ]);
        }
    }

    public function updateRequiredDetails(Request $request, $id)
    {
        $minute = Minutes::find($id);
        if($minute) {
            $minute->product_fabric = $request->input('product_fabric');
            $minute->required_quotes = $request->input('required_quotes');
            $minute->pricing_changes = $request->input('pricing_changes');
            $minute->special_promotion = $request->input('special_promotion');
            $minute->virtual_opportunity = $request->input('virtual_opportunity');
            $minute->save();
            return response()->json([
                'status' => 200,
                'message' => 'Required data updated.',
            ]);
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'Required data update is failed.',
            ]);
        }
    }

    public function updateNewLeads(Request $request, $id)
    {
        $minute = Minutes::find($id);
        if($minute) {
            $minute->lead_possibility = $request->input('lead_possibility');
            $minute->is_coverd_tbs = $request->input('is_coverd_tbs');
            $minute->next_meet_date = $request->input('next_meet_date');
            $minute->next_meet_location = $request->input('next_meet_location');
            $minute->save();
            return response()->json([
                'status' => 200,
                'message' => 'New leads are updated.',
            ]);
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'New lead updates are failed.',
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
