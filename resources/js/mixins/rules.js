export default {
    data () {
        return {
            rules : {
                select : [

                ],
                required : [

                ],
                fech: [
                    v => !!v || 'INGRESE UNA FECHA',
                ],
                fech_not: [
                    v => v != 'N/A' || 'INGRESE UNA FECHA'
                ],
                email: [
                    v => !!v || 'INGRESE UN CORREO',
                    v => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'INGRESE EMAIL VALIDO'
                ],
                pass: [
                    v => !!v || 'INGRESE CONTRASEÑA',
                    v => v.length > 5 || 'LA CONTRASEÑA DEBE SER > 8 CARÁCTERES'
                ],
                // password_confirmation: [
                //     v => this.form.password === v || 'Las contraseñas no coinciden'
                // ],
            },
        };
    },
};