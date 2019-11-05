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
                                color = primary
                                dark
                                dense
                                flat
                                >
                                
                                <v-toolbar-title>Iniciar sesión</v-toolbar-title>
                                
                                <v-spacer/>

                                <v-tooltip>

                                    <template v-slot:activator="{ on }">

                                        <v-icon dark >mdi-lock</v-icon>

                                    </template>

                                </v-tooltip>


                            </v-toolbar>
                    
                            <v-card-text>

                                <v-form>

                                    <v-text-field
                                        label   = "Usuario / Email"
                                        name    = "user"
                                        type    = "text"
                                        prepend-icon = "mdi-account"
                                        clearable
                                    />

                                    <v-text-field
                                        label   = "Clave / Contraseña / Password"
                                        name    = "pass"
                                        :type   = "show ? 'text' : 'password'"
                                        hint    = "Debe ser mayor de 8 carácteres"
                                        :append-icon  = "show ? 'mdi-eye-outline' : 'mdi-eye'"
                                        @click:append = "show = !show"
                                        prepend-icon  = "mdi-lock"
                                        clearable
                                        counter
                                    />

                                </v-form>

                            </v-card-text>

                            <v-card-actions>

                                <v-tooltip right>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "primary" 
                                            icon
                                            >

                                            <v-icon v-on="on">mdi-home</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Ir a la Web</span>

                                </v-tooltip>

                                <v-spacer />
                                
                                <v-tooltip left>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "primary" 
                                            icon
                                            >

                                            <v-icon v-on="on">mdi-send</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Ingresar al Sistema</span>

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
        };
    },
    methods : {
        showblur (event) {
            alert(event);
        }
    } 

}
</script>

<style>

</style>