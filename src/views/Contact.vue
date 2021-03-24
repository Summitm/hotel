<template>
  <div>
    <!-- BEGIN Banner -->
    <section class="page-banner" style="">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="page-title">
              <h1 class="page-headding">Contact Us</h1>
              <ul>
                <li>
                  <router-link tag="li" to="/" class="page-name"
                    >Home</router-link
                  >
                </li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END Banner -->

    <!-- BEGIN Contact Area -->
    <section class="contact ptb">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="headding-part text-center">
              <p class="headding-sub">Get in touch</p>
              <h2 class="headding-title text-uppercase font-weight-bold">
                contact us
              </h2>
            </div>
          </div>
        </div>
        <div class="contact-in">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-5">
              <div class="contact-detail">
                <h3 class="contact-head">Contact Details</h3>
                <p class="contact-desc">
                  Reach to us. We are always waiting to hear from you via your
                  favourite channel(s). Make sure to leave us a message, a
                  complaint, a complementary, a suggestion, or reservation
                  request.
                </p>
                <ul>
                  <li>
                    <i class="fa fa-home" aria-hidden="true"></i>
                    <a href="javascript:void(0)">
                      Museum Hill, Nairobi National Museum,Nairobi, Kenya
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>
                    <a href="tel:1234567890">(+254) 734 860 947, (+254) 700 202 222</a>
                  </li>
                  <li>
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <a href="mailto:support@pizzon.com"
                      >info@museumheritagerestaurant.com</a
                    >
                  </li>
                  <li>
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <a href="javascript:void(0)">
                      <span>Monday – Sunday: 7.30 am – 5.30pm</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-7">
              <div class="leave">
                <form @submit.prevent="sendMail(form)">
                  <div class="form-group">
                    <input
                      type="email"
                      v-model="form.email"
                      class="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.phone"
                      class="form-control"
                      placeholder="Phone"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      v-model="form.subject"
                      class="form-control"
                      placeholder="Subject"
                      required=""
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      v-model="form.message"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                  <input
                    type="submit"
                    name="submit"
                    value="Send Message"
                    class="post-com"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END Contact Area -->

    <!-- BEGIN Banner -->
    <!-- END Banner -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Contact',
    components: {},
    data() {
        return {
            form: {
                email:'',
                phone: '',
                subject: '',
                message: ''
            }
        }
    },
    methods: {
      ...mapActions('mails', ['sendMail'])
        // submitMail() {
        //     // console.log(this.form);
        //     this.$store.dispatch("sendMail", this.form).then(() => {
        //       console.log("Hello World!");
        //     })

        // }
    },
    mounted() {
      //
    }
}
</script>

<style scoped>
.page-banner {
  background: #121619
    url("../../public/static/images/restaurantBanner-min.png")
    no-repeat center / cover;
    /* opacity: .6; */
}
</style>
