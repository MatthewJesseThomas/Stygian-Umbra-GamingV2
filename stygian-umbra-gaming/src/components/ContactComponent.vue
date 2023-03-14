<template lang="">
<section id="contact" class="d-flex justify-content-center w-100">
    <div class="Contact border-5">
        <div class="row d-flex justify-content-center contact-row">
            <div class="col-md-4 d-lg-block w-100">
                <h2 class="text-dark">Contact</h2>
                <form action="https://formspree.io/f/mbjbzywd" method="post" class="mt-3" id="reset-fields">
                    <div>
                        <input type="text" class="form-control" id="reset" placeholder="Enter your Name" name="firstName':'" required>
                    </div>
                    <div>
                        <input type="text" class="form-control" id="reset" placeholder="Enter your Surname" name="surName':'" required>
                    </div>
                    <div>
                        <input type="text" class="form-control" id="reset" placeholder="Enter your Contact Number" name="contactNumber':'" required>
                    </div>
                    <div>
                        <select class="form-select" id="reset" aria-label="Default select example" name="gender':'">
                            <option selected disabled>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Other</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit" class="btn btn-outline-dark mb-2" id="reset-fields">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
</template>
<script>
export default {
    
}
</script>
<style>
#contact {
    margin-top: 5rem;
    margin-bottom: 3rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
    padding-left: 2rem;
    padding-right: 2rem;
    box-shadow: .3vw .3vw 1vw #000;
    
}
.Contact {
    margin-left: 13rem;
    margin-right: 13rem;
    border: 12px solid var(--alternativeColor);
    border-radius: 4px;
}
.contact-row {
    margin: auto;
    width: 100vw;
    
}
.form-control {
    width: 100% !important;
    margin: auto;
    margin-bottom: 3rem;
    align-items: center;
    justify-content: center;
}
.form-select {
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}
.btn-outline-info {
    padding: 1rem 2.1rem;
    margin-left: 9.5rem;
    border-radius: 1rem;
}   
@media screen  and (max-width: 1080px){
    .contact-row{
        margin: auto;
        width: 80vw;
        height: 80vh;
    } 
}
</style>