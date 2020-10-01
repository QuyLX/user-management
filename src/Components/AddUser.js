import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiChinhSua: false,
      id: "",
      name: "",
      tel: "",
      permission: ""
    }
  }
  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
    var item = {};
    item.id = this.state.td;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
  }
  thayDoiTrangThai = () => {
    this.setState({
      trangThaiChinhSua: !this.state.trangThaiChinhSua
    });
  }
  hienThiNut = () => {
    if (this.state.trangThaiChinhSua === true) {
      return <div className="btn btn-block btn-outline-warning" onClick={() => this.thayDoiTrangThai()}> Đóng lại </div>;
    }
    else {
      return <div className="btn btn-block btn-outline-primary" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
    }
  }
  hienThiForm = () => {
    if (this.state.trangThaiChinhSua === true) {
      return (
        <div className="card text-left mt-3">
          <div className="card border-primary">
            <img className="card-img-top" src="holder.js/100px180/" alt="" />
            <div className="card-header">Add User</div>
            <div className="card-body text-primary">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" aria-describedby="helpId" placeholder="User name" name="name" onChange={(event) => this.isChange(event)} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" aria-describedby="helpId" placeholder="Phone number" name="tel" onChange={(event) => this.isChange(event)} />
                </div>
                <div className="form-group">
                  <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)}>
                    <option value={1}>Default</option>
                    <option value={2}>Admin</option>
                    <option value={3}>Morderator</option>
                    <option value={4}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input className="btn btn-block btn-primary" onClick={() => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Submit" type="reset" />
                </div>
              </form>
            </div>

          </div>
        </div>
      );
    }

  }
  render() {
    return (
      <div className="col-md-3 col-sm-6">
        {this.hienThiNut()}
        {this.hienThiForm()}
      </div>
    );
  }
}

export default AddUser;