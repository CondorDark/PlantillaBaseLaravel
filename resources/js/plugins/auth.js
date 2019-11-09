import Vue from 'vue'

import Login    from '~/components/auth/AppLogin'
import Register from '~/components/auth/AppRegister'
import Verify   from '~/components/auth/AppVerify'
import Email    from '~/components/auth/AppEmail'
import Reset    from '~/components/auth/AppReset'

Vue.component('app-login', Login);
Vue.component('app-register', Register);
Vue.component('app-verify', Verify);
Vue.component('app-email', Email);
Vue.component('app-reset', Reset);
