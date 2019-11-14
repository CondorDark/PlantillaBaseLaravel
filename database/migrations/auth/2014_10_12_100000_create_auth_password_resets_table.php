<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthPasswordResetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auth.password_resets', function (Blueprint $table) {
            $table->text('tx_email')->index();
            $table->string('tx_token', 100);
            $table->timestamp('fe_created');
            $table->timestamp('fe_updated');
            $table->boolean('bo_statu')->default(true);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('auth.password_resets');
    }
}
