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
                                
                                <v-toolbar-title>Solicitud Reinicio de Contraseña</v-toolbar-title>
                                
                                <v-spacer/>

                                <v-tooltip>

                                    <template v-slot:activator="{ on }">

                                        <v-icon dark >mdi-lock-reset</v-icon>

                                    </template>

                                </v-tooltip>


                            </v-toolbar>
                    
                            <v-card-text>

                                <v-form>

                                    <v-text-field
                                        label   = "Email"
                                        name    = "email"
                                        type    = "email"
                                        prepend-icon = "mdi-at"
                                        clearable
                                    />

                                </v-form>

                                <template>
                                     
                                     <div>

                                        <p>Mediante este Formulario debera realizar la soliciud de reinicio de su contraseña o clave.</p>
                                        <strong>NOTA : </strong>
                                        <ul>
                                            <li>
                                                <p>Ingresar en el campo el correo el cual posee registrado en el sistema.</p>
                                            </li>
                                            <li>
                                                <p>Debera Ingresar a su correo y seguir las instrucciones dictadas en el mismo.</p>
                                            </li>
                                            <li>
                                                <p>Luego de realizar la soliciud tiene un periodo de 15 minutos para finalizar el 
                                                   restablecimiento de la contraseña.</p>
                                            </li>
                                        </ul>

                                    </div>

                                </template>

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

                                            <v-icon v-on="on">mdi-email</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Enviar Solicitud</span>

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