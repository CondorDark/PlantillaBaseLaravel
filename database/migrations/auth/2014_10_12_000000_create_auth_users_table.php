<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAuthUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('auth.users', function (Blueprint $table) {
            $table->bigIncrements('id_user');
            $table->string('nb_user', 50)->unique();
            $table->text('tx_email')->unique();
            $table->timestamp('fe_email_verification');
            $table->text('tx_password');
            $table->string('tx_token', 100)->nullable();
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
        Schema::dropIfExists('auth.users');
    }
}
