<template lang="">
    <div class="contianment mt-5">
        <div class="text-center">
            <h1 class="display-4 mb-5 abouts"><strong>Cart Crud</strong></h1>
        </div>
        <div class="main row justify-content-center">
            <div class="col-12 col-md-10 mt-5">
                <table class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th>ItemNo.</th>
                            <th>Item</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Changes</th>
                        </tr>
                    </thead>
                    <tbody class="checkout-list">
                        <tr>
                            <td>1001</td>
                            <td>Horizon</td>
                            <td>500</td>
                            <td>3</td>
                            <td>R1500</td>
                            <td>
                                <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
                                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>