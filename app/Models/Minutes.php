<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Minutes extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'customer_id',
        'appointdate',
        'being_visited',
        'goals',
        'acc_changes', 
        'rmu_history', 
        'cus_budget',
        'product_fabric',
        'required_quotes',
        'pricing_changes',
        'special_promotion', 
        'virtual_opportunity', 
        'lead_possibility',
        'is_coverd_tbs',
        'next_meet_date',
        'next_meet_location',
    ];
}
