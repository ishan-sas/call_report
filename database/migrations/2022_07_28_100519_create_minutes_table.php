<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('minutes', function (Blueprint $table) {
            $table->id();
            $table->date('appointDate')->nullable();
            $table->string('being_visited', 128)->nullable();

            $table->foreignId('user_id')->constrained();
            $table->foreignId('customer_id')->constrained();

            $table->text('goals')->nullable();
            $table->string('acc_changes', 256)->nullable();
            $table->text('rmu_history')->nullable();
            $table->text('cus_budget')->nullable();

            $table->text('product_fabric')->nullable();
            $table->text('required_quotes')->nullable();
            $table->string('pricing_changes', 256)->nullable();
            $table->string('special_promotion', 256)->nullable();
            $table->text('virtual_opportunity')->nullable();

            $table->text('lead_possibility')->nullable();
            $table->integer('is_coverd_tbs')->default(0);
            $table->timestamp('next_meet_date')->nullable();
            $table->string('next_meet_location', 128)->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('minutes');
    }
};
