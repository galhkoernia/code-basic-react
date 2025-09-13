// project-react-basic/src/Title.js

import React from "react";

// membuat komponen bernama "Title"
class Title extends React.Component {
  // construktor digunakan untuk inisialisasi state
  constructor() {
    // (super) wajib dipanggil agar bisa akses this
    super();
    // states dari data lokal milik komponne
    this.state = {
      title: "Ini adalah title pertamaku",
      subTitle: "Ini adalah subtitle pertamaku",
    };
  }

  // render () di class component
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h3>{this.state.subTitle}</h3>
      </div>
    );
  }
}

export default Title; // untuk memberi tahu kita mengekspor komponen title
