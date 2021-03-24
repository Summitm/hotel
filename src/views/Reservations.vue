<template>
  <div>
    <!-- BEGIN Banner -->
    <section class="page-banner" style="">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="page-title">
              <h1 class="page-headding">Reserve</h1>
              <ul>
                <li>
                  <router-link tag="li" to="/" class="page-name"
                    >Home</router-link
                  >
                </li>
                <li>Reservations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END Banner -->

    <!-- BEGIN Booking Form -->
    <section class="online-booking reservation pt-100">
      <div class="container">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="headding-part text-center">
              <p class="headding-sub">Make Online Reservation</p>
              <h2 class="headding-title text-uppercase font-weight-bold">
                Book a table
              </h2>
            </div>
          </div>
        </div>
        <form @submit.prevent="onSubmit()">
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                    type="date"
                    v-model="reserveDate"
                    class="form-control"
                    data-placeholder="Pick a date"
                    required
                >
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                    type="text"
                    v-model="reserveTime"
                    class="form-control"
                    placeholder="2 pm"
                >
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  v-model="headCount"
                  class="form-control"
                  placeholder="No. of people"
                  required
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  v-model="phone"
                  class="form-control"
                  placeholder="Phone Number "
                  required
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  v-model="name"
                  class="form-control"
                  id="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  v-model="email"
                  class="form-control"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12">
              <div class="form-group">
                <input
                  type="text"
                  v-model="notes"
                  class="form-control"
                  placeholder="Additional notes"
                  required
                />
              </div>
            </div>
            <div class="col-xl-12 col-lg-12 col-md-12 text-center">
              <input
                type="submit"
                name="submit"
                value="Book a table"
                class="table-book"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- END Booking Form -->

    <!-- BEGIN Scrool To -->
    <div class="top-scrolling">
      <a href="#header" class="scrollTo"
        ><i class="fa fa-angle-up" aria-hidden="true"></i
      ></a>
    </div>
    <!-- END Scrool To -->
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Reservations',
    components: {},
    data() {
        return{
            form: {
                reserveDate: '',
                reserveTime: '',
                headCount: '',
                phone: '',
                name: '',
                email: '',
                notes: ''
            }
        }
    },
    methods: {
        async onSubmit(){
          try{
              let res = await axios.post('/include/mails/reservations.php', {
               reserveDate: this.reserveDate,
               reserveTime: this.reserveTime,
               headCount: this.headCount,
               phone: this.phone,
               name: this.name,
               email: this.email,
               notes: this.notes
              });

              console.log(res.data)
          }
          catch(err){
              console.log(err.message);
          }

        }
    },
}
</script>

<style scoped>
.page-banner {
  background: #121619
    url("../../public/static/images/museumheritagerestaurantBannerBoardRoom-min.png")
    no-repeat center / cover;
}
</style>