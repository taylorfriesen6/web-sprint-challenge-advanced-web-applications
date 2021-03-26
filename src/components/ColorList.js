import React, { useState } from "react";
import axios from "axios";

import {axiosWithAuth} from '../utils/axiosWithAuth';

import Color from './Color';
import EditMenu from './EditMenu';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    const name = e.target[0].value;
    const hex = e.target[1].value;
    const thisColor = colors.find(color => color.color==name);
    if (thisColor === undefined) {
      alert(`${name} is not in the color list!`);
    } else {
      const id = thisColor.id;
      const newValue = {color:name, code:{hex:hex}, id:id};
      console.log(newValue);
      axiosWithAuth().put(`/colors/${id}`, newValue)
        .then(res => {
          axiosWithAuth().get('/colors')
          .then(res => {
            updateColors(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  const deleteColor = color => {
    const name = color.color;
    const id = colors.find(c => c.color == name)?.id;
    if (id !== undefined) {
      axiosWithAuth().delete(`/colors/${id}`)
        .then(res => {
          console.log(res);
          axiosWithAuth().get('/colors')
          .then(res => {
            updateColors(res.data);
          })
          .catch(err => {
            console.log(err);
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.