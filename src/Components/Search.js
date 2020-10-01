import React, { Component } from 'react';
import EditUser from './EditUser';
// lay tu khoa tim kiem
// tim kiem
// xu ly het phan logic tim kiem xX Hm zu ly su lieu o file app.js
// con chi lay du lieu tu bo changeEditUserStatus
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditInfoAp(info);
    }
    isShowEditForm = () => {
        if (this.props.editUserStatus === true) {
            return <EditUser
                getUserEditInfo={this.getUserEditInfo}
                userEditObj={this.props.userEditObj}
                changeEditUserStatus={this.props.changeEditUserStatus} />
        }
    }
    isChange = (event) => {
        this.setState({
            tempValue: event.target.value
        });
    }
    render() {
        return (

            <div className="col-sm-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group " style={{ width: '50%' }}>
                        <input type="text" className="form-control" aria-describedby="helpId" placeholder="Nhập tên" onChange={this.isChange} />
                        <div className="btn btn-info" onClick={() => this.props.getTextSearch(this.state.tempValue)}>Search</div>
                    </div>
                </div>
                <hr />
            </div>

        );
    }
}

export default Search;