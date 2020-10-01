import React, { Component } from 'react';
// userEditObj
class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObj.id,
            name: this.props.userEditObj.name,
            tel: this.props.userEditObj.tel,
            per: this.props.userEditObj.permission
        };
    }
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.per = this.state.per;
        this.props.changeEditUserStatus();
        this.props.getUserEditInfo(info);
    }
    render() {
        return (
            <div className=" mb-2 col-sm-6" >
                <div className="card text-center mt-3 card-block ">
                    <div className="card border-warning">
                        <div className="card-header bg-warning text-white">Edit User</div>
                        <div className="card-body text-white bg-warning">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="User name" name="name" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.name} />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="helpId" placeholder="Phone number" name="tel" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.tel} />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObj.permission}>
                                        <option value>Default</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Morderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="btn btn-block btn-danger" onClick={this.saveButton} value="Save" type="button" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        );
    }
}

export default EditUser;