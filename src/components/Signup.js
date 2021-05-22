import React from 'react'
import ModalBox from './ModalBox';
function Signup() {
    return (
        <div class="bg-danger vh-100 vw-100">
       <ModalBox/>
        <div class="row">
      <div class="col-md-4 offset-md-4">
        <div class="card my-5">
          <div class="card-body">
            <form class="" action="" method="get">
              <div class="form-group">
                <label for="">Name: </label>
                <input class="form-control" type="text" name="name"  />
              </div>
              <div class="form-group">
                <label for="">Email: </label>
                <input class="form-control" type="text" name="email" />
              </div>
              <div class="form-group">
                <label for="">Phone: </label>
                <input class="form-control" tojype="text" name="phone" />
              </div>
                <div class="form-group">
                <label for="">Trade:</label>
                <input class="form-control" type="text" name="amount" />
              </div>
              <div class="form-group">
                <button  type="button" class="form-control btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Submit</button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    )
}

export default Signup
