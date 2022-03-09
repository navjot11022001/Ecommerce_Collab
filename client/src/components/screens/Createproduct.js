import React, { useEffect, useState } from 'react'

const Createproduct = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");
    const [url, setUrl] = useState("");
    useEffect(() => {
        if (url) {
            fetch("/createPosts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    name, img: url,price, desc
                })
            }).then(res => 
                res.json()
            ).then(data => {
                console.log(data);
                if (data.error) {
                    alert("some Error");
                }
                else {
                    alert("uploaded successfully");
                }
            }).catch(err => {
                console.log("me dera hu 30line pe "+err);
            })

        }

    },[url])
 
    const postDetails = () => {
        console.log("ayi kya")
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "insta-clone");
        data.append("cloud_name", "navjot1102");
        fetch("https://api.cloudinary.com/v1_1/navjot1102/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json()).then(data => {
            console.log(data.url);
            setUrl(data.url);
            console.log(data);
        }).catch(err => {
            console.log(err);
        })

    }

    return (
        <main className="container">

            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1 className="display-6">New Product</h1>
                      <div className="mb-3">
                            <label for="name" className="form-label">Name</label>
                            <input type="text" value={name} className="form-control" name="name" id="name" placeholder="Product Name" onChange={(e) => {
                                setName(e.target.value)
                            }} />
                        </div>
                        <div className="mb-3">
                            <label for="img" className="form-label">Image Url</label>
                            <input className="form-control" type="file" name="img" id="img" placeholder="Image Url"
                                onChange={(e) => {
                                    setImage(e.target.files[0]);
                                }} />
                        </div>
                        <div className="mb-3">
                            <label for="price" className="form-label">Price</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text" id="basic-addon1">₹</span>
                                <input type="text" name="price" id="price" className="form-control" placeholder="Price" aria-describedby="basic-addon1" value={price} onChange={(e) => {
                                    setPrice(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="desc" className="form-label">Description</label>
                            <textarea value={desc} className="form-control" name="desc" id="desc" rows="5" onChange={(e) => {
                                setDesc(e.target.value)
                            }}></textarea>
                        </div>
                        <button type="submit" className="btn btn-success btn-small" onClick={()=>postDetails()}>Submit</button>
                
                </div>
            </div>
        </main>
    )
}

export default Createproduct