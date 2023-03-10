<template lang="">
<section id="contact" class="d-flex justify-content-center w-100">
    <div class="Contact border-5">
        <div class="row d-flex justify-content-center contact-row w-100">
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
                        <button type="submit" class="btn btn-outline-info mb-2" id="reset-fields">Submit</button>
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
<style lang="">
    
</style>