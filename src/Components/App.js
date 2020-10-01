import React, { Component } from 'react';
// import '.././App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: DataUser,
      searchText: "",
      editUserStatus: false,
      userEditObj: {}
    }
  }
  deleteUser = (idUser) => {
    var tempData = this.state.dataUser.filter(item => item.id !== idUser);
    this.setState({
      dataUser: tempData
    });
  }
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    })
  }
  getUserEditInfoAp = (info) => {
    this.state.dataUser.forEach((value) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  }
  editUser = (user) => {
    this.setState({
      userEditObj: user
    });

  }
  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = "";
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var newitem = this.state.dataUser;
    newitem.push(item);
    this.setState({
      dataUser: newitem
    });

  }
  getTextSearch = (dl) => {
    this.setState({
      searchText: dl
    });
  }

  render() {
    var ketQua = [];
    this.state.dataUser.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketQua.push(item);
      }
    })
    console.log(ketQua);
    return (
      <div>
        <Header />
        <div className="searchform">
          <div className="container-fluid">
            <div className="row">
              <Search
                getUserEditInfoAp={this.getUserEditInfoAp}
                userEditObj={this.state.userEditObj}
                changeEditUserStatus={() => { this.changeEditUserStatus() }}
                editUserStatus={this.state.editUserStatus}
                getTextSearch={this.getTextSearch}
              />
              <TableData
                deleteUser={this.deleteUser}
                changeEditUserStatus={this.changeEditUserStatus}
                editFun={(user) => this.editUser(user)}
                dataUserProps={ketQua}
              />
              <AddUser
                add={this.getNewUserData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
