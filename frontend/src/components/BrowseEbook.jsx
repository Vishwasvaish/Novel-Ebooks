import React, { useEffect, useState } from "react";

const BrowseEbook = () => {
  const [ebookList, setEbookList] = useState([]);

  const [selEbook, setSelEbook] = useState(null);

  const fetchEbookData = async () => {
    const res = await fetch("http://localhost:5000/ebook/getall");
    const data = await res.json();
    console.log(data);
    setEbookList(data);
  };

  useEffect(() => {
    fetchEbookData();
  }, []);

  const displayEbookData = () => {
    return ebookList.map((ebook) => {
      return (
        <div className="col-md-2">
          <div className="card">
            <div className="card-header">
              <h3>{ebook.title}</h3>
            </div>
            <img src={"http://localhost:5000/" + ebook.coverpage} alt="" />
            <div className="card-body">
              <p>Author : {ebook.author}</p>

              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={(e) => setSelEbook(ebook)}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  // const downloadFile = async (ebook) => {
  //   const link = document.createElement("a");
  //   link.href = ;
  //   link.download = ebook.file;
  //   link.click();
  // }

  return (
    <div>
      <>
        <div
          className="modal fade modal-lg"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Ebook Details
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">{
                selEbook && (
                  <div className="row">
                    <div className="col-md-4">
                    <img src={"http://localhost:5000/" + selEbook.coverpage} alt="" />
                    </div>
                    <div className="col-md-8">
                      <h3>{selEbook.title}</h3>
                      <p>Author : {selEbook.author}</p>
                      <p>Publisher : {selEbook.publisher}</p>
                      <p>Credits : {selEbook.credits}</p>
                      <p>Date : {selEbook.date}</p>
                      <p>File : {selEbook.file}</p>

                      <a href={"http://localhost:5000/" + selEbook.file} className="btn btn-success"> <i class="fas fa-download    "></i> Download in PDF</a>
                    </div>  
                  </div>
                )
              }</div>
              
            </div>
          </div>
        </div>
      </>

      <header>
        <h1>Browse Ebooks</h1>
      </header>
      <div className="container">
        <div className="row">{displayEbookData()}</div>
      </div>
    </div>
  );
};

export default BrowseEbook;
