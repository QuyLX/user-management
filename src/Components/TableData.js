import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

  mappingDataUser = () => this.props.dataUserProps.map((value, key) => (
    <TableDataRow
      deleteBtnClick={this.props.deleteUser}
      changeEditUserStatus={this.props.changeEditUserStatus}
      editFunClick={() => { this.props.editFun(value) }}
      userName={value.name}
      key={key}
      index={key}
      tel={value.tel}
      id={value.id}
      per={value.permission} />
  ))

  render() {
    return (
      <div className="col-sm-12 col-md-9">
        <table className="table table-hover table-striped table-inverse ">
          <thead className="thead-inverse">
            <tr className="text-center">
              <th>STT</th>
              <th>Tên</th>
              <th>Điện thoại</th>
              <th>Quyền</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableData;