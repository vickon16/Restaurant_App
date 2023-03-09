import {motion} from "framer-motion"
import {MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney} from "react-icons/md";
import {categories} from "../data";
import {Loader} from "../components";
import useStorageHook from '../useStorageHook';

const articleStyle = "w-full py-2 border-b border-gray-300 flex items-center gap-1";
const inputClassname = "w-full text-lg bg-transparent py-1 px-3 outline-none border-none placeholder:text-gray-400 text-textColor"

const CreateContainer = () => {
  const {items, handleInputs, alertStatus, deleteImage, fields, imageURL, isLoading, msg, uploadImage, saveDetails} = useStorageHook();

  return (
    <section className="w-full h-auto min-h-screen flex items-start justify-center">
      <div className="w-[90%] md:w-[70%] border border-gray-300 border-b-0 rounded-lg p-4 flex flex-col items-center justify-center gap-3">
        {fields && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`w-full p-2 rounded-lg text-center text-lg ${
              alertStatus === "danger"
                ? "bg-red-400 text-red-800"
                : "bg-emerald-400 text-emerald-800"
            }`}
          >
            {msg}
          </motion.p>
        )}

        {/* Title Input */}
        <article className={articleStyle}>
          <MdFastfood className="text-xl text-gray-700" />
          <input
            type="text"
            name="title"
            value={items.title}
            onChange={handleInputs}
            placeholder="Give me a title..."
            className={inputClassname}
            maxLength={30}
            required
          />
        </article>

        {/* Catetory Input */}
        <article className="w-full">
          <select
            name="category"
            className="w-full bg-white outline-none border-b-2 border-gray-200 p-2 rounded-md cursor-pointer"
            onChange={handleInputs}
          >
            <option value="">Select Category</option>
            {categories &&
              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.urlName}
                  className="text-base capitalize text-headingColor"
                >
                  {category.name}
                </option>
              ))}
          </select>
        </article>

        {/* picture field */}
        <article className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {!imageURL ? (
                <>
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                      <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                      <p className="text-gray-500 hover:text-gray-700">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="uploadImage"
                      accept="image/*"
                      onChange={uploadImage}
                      className="hidden"
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className="relative h-full">
                    <img
                      src={imageURL}
                      alt="uploadedImage"
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-300 ease-in-out"
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </article>

        <div className="w-full flex items-center">
          {/* Calories Field */}
          <article className={articleStyle}>
            <MdFoodBank className="text-xl text-gray-700" />
            <input
              type="text"
              name="calories"
              value={items.calories}
              onChange={handleInputs}
              placeholder="Calories..."
              className={inputClassname}
              maxLength={5}
              required
            />
          </article>
          {/* price Field */}
          <article className={articleStyle}>
            <MdAttachMoney className="text-xl text-gray-700" />
            <input
              type="number"
              name="price"
              value={items.price}
              onChange={handleInputs}
              placeholder="Price..."
              className={inputClassname}
              min={0}
              max={10000}
              required
            />
          </article>
        </div>

        <div className="flex items-center w-full">
          <button
            type="button"
            className="md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold"
            onClick={saveDetails}
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
}

export default CreateContainer
