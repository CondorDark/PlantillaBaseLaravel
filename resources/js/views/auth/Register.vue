<template>

    <v-app id = "app">

        <v-content>

            <v-container
                class = "fill-height"
                fluid
                >

                <v-row
                    align   = "center"
                    justify = "center"
                    >

                    <v-col
                        cols = "12"
                        sm   = "8"
                        md   = "4"
                        >
                        
                        <v-card class="elevation-12">
                            
                            <v-toolbar
                                color = "primary"
                                dark
                                dense
                                flat
                                >
                                
                                <v-toolbar-title>Registro</v-toolbar-title>
                                
                                <v-spacer/>

                                <v-tooltip>

                                    <template v-slot:activator="{ on }">

                                        <v-icon dark >mdi-account-plus-outline</v-icon>

                                    </template>

                                </v-tooltip>


                            </v-toolbar>
                    
                            <v-card-text>

                                <v-form>

                                    <v-text-field
                                        label   = "Usuario"
                                        name    = "user"
                                        type    = "text"
                                        prepend-icon = "mdi-account"
                                        clearable
                                    />

                                    <v-text-field
                                        label   = "Email"
                                        name    = "email"
                                        type    = "email"
                                        prepend-icon = "mdi-at"
                                        clearable
                                    />

                                    <v-text-field
                                        label   = "Clave / Contraseña / Password"
                                        name    = "pass"
                                        :type   = "show ? 'text' : 'password'"
                                        :append-icon  = "show ? 'mdi-eye-outline' : 'mdi-eye'"
                                        @click:append = "show = !show"
                                        prepend-icon  = "mdi-lock"
                                        clearable
                                        counter
                                    />

                                    <v-text-field
                                        label   = "Clave / Contraseña / Password"
                                        name    = "pass"
                                        :type   = "show ? 'text' : 'password'"
                                        :append-icon  = "show ? 'mdi-eye-outline' : 'mdi-eye'"
                                        @click:append = "show = !show"
                                        prepend-icon  = "mdi-lock"
                                        clearable
                                        counter
                                    />

                                    <v-text-field
                                        label   = "Codigo Institución"
                                        name    = "code"
                                        type   = "text"
                                        prepend-icon  = "mdi-code-string"
                                        clearable
                                        counter
                                    />

                                </v-form>

                            </v-card-text>

                            <v-card-actions>

                                <v-tooltip right>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "black" 
                                            icon
                                            :href = "sourceWebH"
                                            >

                                            <v-icon v-on="on">mdi-home</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Ir a la Web</span>

                                </v-tooltip>

                                <v-spacer />

                                <v-tooltip bottom>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "error" 
                                            icon
                                            :href = "sourceWebL"
                                            >

                                            <v-icon v-on="on">mdi-login-variant</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Ir a Iniciar Sessión</span>

                                </v-tooltip>

                                <v-spacer />
                                
                                <v-tooltip left>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "success" 
                                            icon
                                            :href = "sourceApp"
                                            >

                                            <v-icon v-on="on">mdi-account-plus</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Registrarte</span>

                                </v-tooltip>

                            </v-card-actions>

                        </v-card>

                    </v-col>

                </v-row>

            </v-container>

        </v-content>

    </v-app>

</template>

<script>
export default {
    data () {
        return {
            show : false,
            sourceWebH : '',
            sourceWebL : '',
            sourceApp : '',
        };
    },
}
</script>

<style>

</style>