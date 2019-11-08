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

                        <v-row
                            aling   = "start"
                            justify = "space-around"
                            v-if    = "imgAccount"
                            >

                            <v-col
                                cols = "6"
                                sm   = "4"
                                md   = "2"
                                >

                                <v-avatar 
                                    size    = "100"
                                    dark
                                    >

                                    <v-img :src = "sourceImg"></v-img>

                                </v-avatar>
                                
                            </v-col>

                        </v-row>
                        
                        <v-card class="elevation-12">
                            
                            <v-toolbar
                                color = "primary"
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
                                            color = "black" 
                                            icon
                                            :href = "sourceWeb"
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
                                            :href = "sourceWeb"
                                            >

                                            <v-icon v-on="on">mdi-lock-question</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Olvido su Contraseña</span>

                                </v-tooltip>

                                <v-spacer />

                                <v-tooltip bottom>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "success" 
                                            icon
                                            :href = "sourceWeb"
                                            >

                                            <v-icon v-on="on">mdi-account-plus</v-icon>

                                        </v-btn>

                                    </template>

                                    <span>Registrate</span>

                                </v-tooltip>

                                <v-spacer />
                                
                                <v-tooltip left>

                                    <template v-slot:activator="{ on }">

                                        <v-btn 
                                            color = "primary" 
                                            icon
                                            :href = "sourceApp"
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
            sourceWeb : '',
            sourceApp : '',
            sourceImg : '',
            imgAccount : false,
        };
    },
}
</script>

<style>

</style>