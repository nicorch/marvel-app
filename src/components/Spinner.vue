<template>
    <div class="spinner">
        <div class="spin">
            <b-spinner class="spin" style="width: 6rem; height: 6rem; color:#e62429" label="Large Spinner"></b-spinner>
            <h2>Searching for data...</h2>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.spinner{
    height: 100vh;
    width: 100%;
}
.spin{
    margin: 40px;
    margin-bottom: 20px;
    background: black;
    margin-top: 50px;
    border-radius: 10px;
}

.spin h2{
    color: white;
    font-family: marvel;
    padding-bottom: 50px;
    letter-spacing:.1rem;
}
</style>