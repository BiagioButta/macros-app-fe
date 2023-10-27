<template>
    <div class="main-container">
        <div id="main-section-header">
            <Header/>
        </div>

        <div id="main-section-container">

            <div id="main-width-70x100">
                <slot/>
            </div>
            
        </div>
        
        <div id="main-section-footer">
            <Footer/>
        </div>
    </div>
</template>

<script setup>
import Header from '../views/Header.vue';
import Footer from '../views/Footer.vue';
// import SidebarDx from '../components/SidebarDx.vue';
// import SidebarSx from '../components/SidebarSx.vue';
</script>

<style lang="scss" scoped>

.main-container{
    display: flex;
    flex-direction: column;

    #main-section-header,
    #main-section-footer {
        width: 70%;
        margin: 0 auto;
    }

    #main-section-container {
        width: 100%;
        display: flex;
        
        #sidebar-sx,
        #sidebar-dx{
            flex-basis: 250px;
            margin: 0 auto;
            display: flex;
            justify-content: flex-start;
            flex-direction: column;
        }
    
        #main-width-70x100{
            margin: 0 auto;
            width: 70%;
        }
    }
}



</style>