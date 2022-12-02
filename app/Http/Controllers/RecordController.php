<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;

class RecordController extends Controller
{
    public function store(Request $request) {
        $minutes = Record::create([
            'user_id' => auth()->id(),
            'customer_id' => $request->customer_id,
            'goals' => $request->goals,
            'acc_changes' => $request->acc_changes, 
            'rmu_history' => $request->rmu_history, 
            'cus_budget' => $request->cus_budget,
        ]);

        return response()->json([
            'status' => 200,
            'message' => 'Minutes successfully added.',
        ]);    
    }

    public function update(Request $request, $id)
    {
        $minute = Record::find($id);
        if($minute) {
            // $input = $request->all();
            // $minute->goals = $input['goals']; 
            // $minute->acc_changes = $input['acc_changes']; 
            // $minute->rmu_history = $input['rmu_history']; 
            // $minute->cus_budget = $input['cus_budget']; 
            
            $minute->goals = $request->input('goals');
            $minute->acc_changes = $request->input('acc_changes');
            $minute->rmu_history = $request->input('rmu_history');
            $minute->cus_budget = $request->input('cus_budget');
            $minute->save();
            return response()->json([
                'status' => 200,
                'message' => 'Record updated successfully.',
            ]);
        }
        else {
            return response()->json([
                'status' => 404,
                'message' => 'Record update is failed.',
            ]);
        }
    }
}
