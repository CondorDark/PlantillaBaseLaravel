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
                                
                                <v-toolbar-title>Código de Verificación</v-toolbar-title>
                                
                                <v-spacer/>

                                <v-tooltip>

                                    <template v-slot:activator="{ on }">

                                        <v-icon dark >mdi-code-string</v-icon>

                                    </template>

                                </v-tooltip>


                            </v-toolbar>
                    
                            <v-card-text>

                                <v-form>

                                    <v-text-field
                                        label  = "Código"
                                        name   = "code"
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

                                            <v-icon v-on="on">mdi-shield-check</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Verificar Código</span>

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