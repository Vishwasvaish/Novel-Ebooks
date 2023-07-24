import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";

const AddEbook = () => {
  const navigate = useNavigate();

  const [selFile, setSelFile] = useState('');
  const [selImage, setSelImage] = useState('');

  const uploadFile = (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };
  
  const uploadImage = (e) => {
    if(!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const ebookForm = useFormik({
    initialValues: {
      title: "",
      coverpage: "",
      author: "",
      publisher: "",
      credits: "",
      date: "",
      file: "",
      createdAt: new Date(),
    },

    onSubmit: async (values) => {
      values.file = selFile;
      values.coverpage = selImage;
      console.log(values);
      const res = await fetch("http://localhost:5000/ebook/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Ebook Added Successfully",
        });
      }
    },
  });

  return (
    <div >
      <div className="col-md-6 mx-auto d-flex align-items-center vh-100">
        <div className="card w-100">
          <div className="card-body">
            <h2 className="my-5 text-center">Upload Novel Ebooks</h2>

            <form onSubmit={ebookForm.handleSubmit}>
              <label htmlFor="">Novel Title</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {ebookForm.touched.title && ebookForm.errors.title}
              </span>
              <input
                className="form-control mb-3"
                onChange={ebookForm.handleChange}
                value={ebookForm.values.title}
                name="title"
              />

              <label htmlFor="">Cover Page</label>
              <input
                className="form-control mb-3"
                type="file"
                onChange={uploadImage}
                
              />

              <label htmlFor="">Author</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {ebookForm.touched.author && ebookForm.errors.author}
              </span>
              <input
                className="form-control mb-3"
                onChange={ebookForm.handleChange}
                value={ebookForm.values.author}
                name="author"
              />

              <label htmlFor="">Publisher</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {ebookForm.touched.publisher && ebookForm.errors.publisher}
              </span>
              <input
                className="form-control mb-3"
                onChange={ebookForm.handleChange}
                value={ebookForm.values.publisher}
                name="publisher"
              />

              <label htmlFor="">Credits</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {ebookForm.touched.credits && ebookForm.errors.credits}
              </span>
              <input
                className="form-control mb-3"
                onChange={ebookForm.handleChange}
                value={ebookForm.values.credits}
                name="credits"
              />

              <label htmlFor="">Date</label>
              <span style={{ color: "red", fontSize: 15, marginLeft: 10 }}>
                {ebookForm.touched.date && ebookForm.errors.date}
              </span>
              <input
                className="form-control mb-3"
                type="date"
                onChange={ebookForm.handleChange}
                value={ebookForm.values.date}
                name="date"
              />

              <label htmlFor="">Upload Ebook</label>
              <input
                className="form-control mb-3"
                onChange={uploadFile}
                type="file"
              />


              <button type="submit" className="btn btn-primary mt-4">
                Add Ebook Data
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEbook;
