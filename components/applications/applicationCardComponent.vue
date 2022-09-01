<template>
    <div class="card-drop-shadow w-full max-w-sm bg-white rounded-lg border border-gray-200">
        <div class="pb-10 pt-5 pb-5 pl-10 pr-10 divider-y">

            <!---Profil-->
            <div class="flex items-center">
                <AvatarComponent class="mb-5" :gender="application.gender"
                    :urlPhoto="`https://${application.avatar}?u=${application.id}`"></AvatarComponent>
                <div class="flex flex-col pl-4">
                    <h5 class="mb-1 text-sm text-black">{{ application.firstname }} {{
                            application.lastname
                    }}</h5>
                    <span class="text-sm text-black">{{ age }}</span>
                </div>
            </div>

            <!--btn more -->
            <button class="btn btn-blue bg-purple-200 hover:bg-purple-400 text-purple-800 py-2 px-4 rounded font-light">
                Voir la candidature
            </button>
            <div class="divider h-0.5 bg-gray-200 mt-4"></div>


            <!---Social Networks Toggle-->
            <div class="social-networks divider-y mt-4 mb-4">
                <div class="toggles flex items-center justify-between">
                    <button @click="toggleActive" class="border button-gradient flex items-center justify-center insta"
                        :class="activeToggleInsta ? `` : `inactive`">
                        <img v-if="activeToggleInsta" class="pr-2" src="~/assets/insta.png" />
                        <font-awesome-icon v-else icon="fa-brands fa-instagram"></font-awesome-icon>
                        <span class="gradient-insta-text">@{{ application.social_networks[0].username }}</span>
                    </button>
                    <button @click="toggleActive"
                        class="ml-2 border border-blue-400 text-blue-400 flex items-center justify-center twitter"
                        :class="activeToggleInsta ? `inactive` : ``">
                        <font-awesome-icon icon="fa-brands fa-twitter"></font-awesome-icon>
                        <span class="text-blue-400"> @{{ application.social_networks[1].username }}</span>
                    </button>
                </div>
            </div>

            <SocialNetworkInfosComponent :socialNetwork="infosForSocialNetwork">
            </SocialNetworkInfosComponent>

        </div>

        <!-- btn action on ends -->
        <ButtonYesNoComponent @validate="createApplication" @invalidate="deleteApplication"></ButtonYesNoComponent>
    </div>
</template>

<script>
import ButtonYesNoComponent from "../ButtonYesNoComponent.vue";
export default {
    name: "ApplicationCardComponent",
    data() {
        return {
            activeToggleInsta: true,
            infosForSocialNetwork: this.application.social_networks[0],
        };
    },
    computed: {
        age: function () {
            var ageDifMs = Date.now() - new Date(this.application.birthdate).getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        }
    },
    methods: {
        toggleActive: function () {
            this.activeToggleInsta = !this.activeToggleInsta;
            if (this.activeToggleInsta) {
                this.infosForSocialNetwork = this.application.social_networks[0];
            }
            else {
                this.infosForSocialNetwork = this.application.social_networks[1];
            }
        },
        createApplication: function () {
            this.$store.dispatch('createApplications')
        },
        deleteApplication: function () {
            this.$store.dispatch('deleteApplications')
        }
    },
    props: {
        application: null,
    },
    components: { ButtonYesNoComponent }
}
</script>
<style>
.card-drop-shadow {
    box-shadow: 0px 0px 2px 0px #00000026;
}

.gradient-insta-text {
    background: linear-gradient(225deg, #DEFB8A -0.9%, #FCBB45 26.04%, #F75274 47.65%, #D53692 66.71%, #8F39CE 94.59%, #5B4FE9 128.3%),
        linear-gradient(0deg, #FFFFFF, #FFFFFF);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.toggles>button {
    border-radius: 100rem;
    font-size: 0.75rem;
    padding: 0.3rem 2rem;
    width: 220px;
    transition: width ease-out 350ms;
}

.toggles>button.inactive {
    width: 30px;
}

.toggles>button.inactive>span {
    display: none;
}

.toggles>button.inactive.twitter {
    background: rgba(96, 165, 250, 0.4);
    border-color: transparent;
    padding: 0.5rem;
    color: white;
}

.button-gradient {
    border-color: transparent !important;
    background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(225deg,
            #DEFB8A -0.9%,
            #FCBB45 26.04%,
            #F75274 47.65%,
            #D53692 66.71%,
            #8F39CE 94.59%,
            #5B4FE9 128.3%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    box-shadow: 2px 1000px 1px #fff inset;
}

.toggles>button.inactive.button-gradient {
    box-shadow: none;
    color: white;
    padding: 0.5rem;
}
</style>