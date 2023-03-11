import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { storage } from "../firebase-config";
import { saveFoodItem } from "../firebaseFunctions";
import { useNavigate } from "react-router-dom";

const itemsList = {
  title: "",
  calories: "",
  price: "",
  category: "",
  imageURL: "",
};

const useStorageHook = () => {
  const [items, setItems] = useState(itemsList);
  const [fields, setFields] = useState(false);
  const [alertStatus, setAlertStatus] = useState("danger");
  const [msg, setMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const imageURL = items.imageURL;

  const errSuccessHandle = (msg, status) => {
    setFields(true);
    setMsg(msg);
    setAlertStatus(status);
    setTimeout(() => {
      setFields(false);
      setIsLoading(false);
    }, 4000);
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setItems((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const uploadImage = (e) => {
    setIsLoading(true);
    const image = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}.${image.name}`);

    // uploadfile
    const uploadTask = uploadBytesResumable(storageRef, image);
    if (image !== "") {
      uploadTask.on(
        "state_changed",
        (snap) => {
          const progress = (snap.bytesTransferred / snap.totalBytes) * 100;
          if (snap.state === "running") {
            console.log("Running:" + progress);
          }
        },
        (err) => {
          errSuccessHandle("Error while uploading : Try Again", "danger");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setItems((prev) => ({ ...prev, imageURL: downloadURL }));
            setIsLoading(false);
            errSuccessHandle("Image uploaded successfully!!!.", "success");
          });
        }
      );
    }
  };

  // Delete Image from firebase
  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageURL);
    deleteObject(deleteRef).then(() => {
      setItems((prev) => ({ ...prev, imageURL: null }));
      setIsLoading(false);
      errSuccessHandle("Image deleted successfully!!!.", "success");
    });
  };

  // save details
  const saveDetails = () => {
    setIsLoading(true);
    try {
      const { title, price, calories, category } = items;
      if (!title || !price || !calories || !category || !imageURL) {
        errSuccessHandle("Required fields cannot be empty", "danger");
      } else {
        const data = {
          id: `${Date.now()}`,
          imageURL,
          quantity: 1,
          price: Number(price),
          title,
          category,
          calories,
        };
        setItems(itemsList);
        setIsLoading(false);
        saveFoodItem(data);
        setFields(true);
        setMsg("Data Uploaded Successfully!!!");
        setAlertStatus("Success");

        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      errSuccessHandle("Error while Saving Details : Try Again", "danger");
    }
  };

  return {
    items,
    handleInputs,
    fields,
    alertStatus,
    msg,
    isLoading,
    imageURL,
    uploadImage,
    deleteImage,
    saveDetails,
  };
};

export default useStorageHook;
