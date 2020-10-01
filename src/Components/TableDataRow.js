import React, { Component } from 'react';
// this.props.editFun()
class TableDataRow extends Component {
    permissionRow = () => {
        if (this.props.per === 1) {
            return "Admin";
        }
        else if (this.props.per === 2) {
            return "Moderator";
        }
        else {
            return "Normal User";
        }
    }
    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }
    render() {
        return (
            <tr>
                <td >{this.props.index + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permissionRow()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-danger sua" onClick={this.editClick}><i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-warning sua" onClick={() => this.props.deleteBtnClick(this.props.id)}><i className="fa fa-edit" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;