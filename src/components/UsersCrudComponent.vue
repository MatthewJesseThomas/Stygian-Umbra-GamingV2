<template lang="">
    <div class="contianment mt-5">
        <div class="text-center">
            <h1 class="display-4 mb-5"><strong>User Crud</strong></h1>
        </div>
        <div class="main row justify-content-center">
            <div class="col-12 col-md-10 mt-5">
                <table class="table table-striped table-dark border-1">
                    <thead>
                        <tr>
                            <th>UserID</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Gender</th>
                            <th>CellPhoneNumber</th>
                            <th>EmailAdd</th>
                            <th>UserRole</th>
                            <th>UserProfile</th>
                            <th>JoinDate</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody class="checkout-list">
                        <tr v-for="user in users" :key="user">
                            <td data-label="Id">{{user.user_id}}</td>
                            <td data-label="Name">{{user.firstName}}</td>
                            <td data-label="Surname">{{user.lastName}}</td>
                            <td data-label="Gender">{{user.gender}}</td>
                            <td data-label="Mobile">{{user.cellphoneNumber}}</td>
                            <td data-label="Email">{{user.emailAdd}}</td>
                            <td data-label="Role" >{{user.userRole}}</td>
                            <td data-label="Profile"><img class="rounded-circle" :src="user.userProfile" style="width:2rem; height:1rem;"  alt="ProfilePics"></td>
                            <td data-label="JoinDate">{{splitDate[0]}}</td>
                            <td>
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target="'#edit'+ user.user_id">
  Edit
</button>

<!-- Modal -->
<div class="modal fade" :id="'edit'+ user.user_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title text-dark fs-5" id="exampleModalLabel">Edit {{user.firstName + user.lastName}}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="form-group">
              <label for="exampleInputUserId">UserId</label>
              <input type="text" class="form-control" v-model="modalPayload.user_id" id="exampleInputUserId" placeholder="Enter UserId">
            </div>
            <div class="form-group">
              <label for="exampleInputFirstName">FirstName</label>
              <input type="text" class="form-control" v-model="modalPayload.firstName" id="exampleInputFirstName" placeholder="Enter FirstName">
            </div>
            <div class="form-group">
              <label for="exampleInputLastName">LastName</label>
              <input type="text" class="form-control" v-model="modalPayload.lastName" id="exampleInputLastName"  placeholder="Enter LastName">
            </div>
            <div class="form-group">
              <label for="exampleInputGender">Gender</label>
              <input type="number" class="form-control" v-model="modalPayload.gender" id="exampleInputGender" placeholder="Enter Gender">
            </div>
            <div class="form-group">
              <label for="exampleInputCellphoneNumber">CellphoneNumber</label>
              <input type="text" class="form-control" v-model="modalPayload.cellphoneNumber" id="exampleInputCellphoneNumber" placeholder="Enter CellphoneNumber">
            </div>
            <div class="form-group">
              <label for="exampleInputEmailAddress">EmailAddress</label>
              <input type="text" class="form-control" v-model="modalPayload.emailAdd" id="exampleInputEmailAddress" placeholder="Enter EmailAddress">
            </div>
            <div class="form-group">
              <label for="exampleInputUserRole">UserRole</label>
              <input type="text" class="form-control" v-model="modalPayload.userRole" id="exampleInputUserRole"  placeholder="Enter UserRole">
            </div>
            <div class="form-group">
              <label for="exampleInputUserProfile">UserProfile</label>
              <input type="number" class="form-control" v-model="modalPayload.userProfile" id="exampleInputUserProfile" placeholder="Enter UserProfile">
            </div>
            <div class="form-group">
              <label for="exampleInputJoinDate">JoinDate</label>
              <input type="text" class="form-control" v-model="modalPayload.joinDate" id="exampleInputJoinDate" placeholder="Enter JoinDate">
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" v-on:click="edit()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
// import Swal from 'sweetalert2';
export default {
  setup() {
    const store = useStore();
    store.dispatch('fetchUsers');
    const users = computed(() => store.state.users);
    const user = JSON.parse(localStorage.getItem('user'));
    const { joinDate } = user;
    let splitDate = joinDate.split("T");
    const modalPayload = {
      user_id: "",
      firstName: "",
      lastName: "",
      cellphoneNumber: "",
      emailAdd: "",
      userRole: "",
      userProfile: "",
      joinDate: ""
    };
    console.log(user);
    async function edit() {
      console.log(modalPayload);

    }
    //   Swal.fire("Well Done!!!", "You've Successfully Edit User Crud!!!");
    return {
      user,
      users,
      splitDate,
      modalPayload,
      edit
    }
  }
}
</script>
<style scoped>
@media(max-width:300px) {
  .table {
    height: 100%;
    overflow-y: hidden;
  }

  .table thead {
    display: none;
  }

  .table,
  .table body,
  .table tr,
  .table td {
    display: block;
  }

  .table tr {
    margin-bottom: 15px;
  }

  .table td {
    text-align: right;
    padding-left: 50%;
    text-align: right;
    position: relative;
    width: 100%;
  }

  .table td::before {
    content: attr(data-label);
    position: absolute;
    left: 0;
    width: 80%;
    padding-left: 15px;
    font-size: 20px;
    font-weight: bolder;
    text-align: left;
  }
}</style>