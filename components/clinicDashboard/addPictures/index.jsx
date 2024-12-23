import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonComponent from "@/globalElements/Button";
import Image from "next/image";

const AddPictures = () => {
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      files: [],
    },
    validationSchema: Yup.object({
      files: Yup.array()
        .of(
          Yup.mixed()
            .test(
              "fileSize",
              "File is too large. Max size is 5MB.",
              (value) => value && value.size <= 5 * 1024 * 1024 // 5MB
            )
            .test(
              "fileFormat",
              "Unsupported file format. Only .jpg, .jpeg, .png are allowed.",
              (value) => value && /\.(jpg|jpeg|png)$/i.test(value.name) // Regex for allowed file types
            )
        )
        .required("At least one image is required"),
    }),
    onSubmit: (values) => {
      // Handle file submission if needed
      console.log("Files to upload:", values.files);
      console.log("Submitted");
    },
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // FileList'i Array'e dönüştür
    const filePreviews = files.map((file) => URL.createObjectURL(file));
    setUploadedPhotos((prev) => [...prev, ...filePreviews]);
    formik.setFieldValue("files", [...formik.values.files, ...files]);
};

  const handleDeletePhoto = (index) => {
    const updatedPhotos = uploadedPhotos.filter((_, i) => i !== index);
    setUploadedPhotos(updatedPhotos);
  };

  return (
    <div className="w-full bg-white rounded-[32px] shadow-[0px_4px_6px_0px_rgba(199, 199, 199, 0.08)] p-[1rem]">
      <div className="flex flex-col gap-8 mb-2">
        <h1 className="text-xl font-bold">Add Pictures</h1>
        <p className="text-gray-600">
          Preview my changes (remember to save first!)
        </p>
        <p className="text-gray-600">Edit / Delete uploaded pictures</p>
      </div>

      {/* Upload Section */}
      <form
        onSubmit={formik.handleSubmit}
        className="bg-[#F4F6F8] border border-[#919EAB52] w-full h-[240px] rounded-[8px] flex items-center justify-center"
      >
        <div
          onClick={() => document.getElementById("files").click()}
          style={{ cursor: "pointer" }}
        >
          <Image
            src="/assets/dashboard/illustration_upload.svg"
            width={212}
            height={160}
            alt="Upload Illustration"
            layout="intrinsic"
          />
        </div>
        <label htmlFor="files" className="text-center text-gray-600 mt-4">
          Select files: <br /> (max file size: 5 MB)
        </label>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          accept=".jpg,.jpeg,.png" // Restricting file types in the file picker
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {formik.touched.files && formik.errors.files && (
          <div className="text-red-500 text-sm">{formik.errors.files}</div>
        )}
      </form>

      {/* Uploaded Photos Section */}
      <div className="mt-8">
        <p className="text-lg font-medium mb-1">Ex Photos</p>
        <div className="grid grid-cols-3 gap-4 bg-[#F4F6F8] border border-[#919EAB52] p-4 rounded-[8px] ">
          {uploadedPhotos.length === 0 && (
            <p className="text-gray-500 col-span-3 text-center">
              No photos uploaded yet.
            </p>
          )}
          {uploadedPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative w-full h-32 rounded-lg overflow-hidden border border-gray-300"
            >
              <Image
                src={photo}
                alt={`Uploaded ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />

              <button
                onClick={() => handleDeletePhoto(index)}
                className="absolute top-2 right-2 bg-red-600 text-white text-xs p-1 rounded-full"
              >
                X
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="w-full flex justify-end mt-6">
        <ButtonComponent
          onClick={formik.handleSubmit}
          type="submit"
          className="bg-primary !py-2 !px-4 text-white !rounded-lg !w-[174px]"
        >
          <p className="text-sm">Save</p>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default AddPictures;
