import React, { Component } from 'react';
import sortList from 'common/sortable';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.listId = Math.random().toString().replace('.','');
  }

  componentDidMount(){
    if(this.props.sortable) {
      sortList({
        element:`#${this.listId}`,
        itemSelector: "li",
        ajax: false,
      },(data) =>{
        this.props.sortItem(data);
      });
      console.log($(`#${this.listId}`));
    }
  }

  render() {
    const { dataSourceUi } = this.props;
    let name = '';
    if( dataSourceUi.length > 0 ) {
      name = 'list-group';
    }
    return (
      <ul id={this.listId} className={`multi-list sortable-list ${name} ${this.props.listClassName}`}>
      {
        dataSourceUi.map( (item,i) => {
          return (
            <li className="list-group-item" id={item.itemId} key={item.itemId} data-seq={item.seq}>
              { this.props.sortable && <i className="es-icon es-icon-yidong mrl color-gray"></i> }
              <img className="avatar-sm avatar-sm-square" src ={item.avatar}/> 
              <span className="label-name text-overflow">{ item.nickname }</span>
              <label><input type="checkbox" checked={item.isVisible} onChange= {event=>this.props.onChecked(event)} value={item.itemId}/>显示</label>
              <a className="btn-close btn-close-lg link-gray" onClick={event=>this.props.removeItem(event)} id={item.itemId}>
                <i className = "es-icon es-icon-close01 text-sm"></i>
              </a>
            </li>
          )
        })
      }
      </ul>
    )
  }
};