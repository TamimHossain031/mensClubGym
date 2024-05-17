import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import Input from "./Utility/Input";
import { imgDb,addData } from "./Utility/firebase";
import { useNavigate } from "react-router-dom";
export default function Add() {
  const navigate = useNavigate();
  const imgEl = useRef(null);
  const btn = useRef("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const date = new Date().toDateString();
    if (imgEl.current.value == "") {
    } else {
      const imgRef = ref(imgDb, `files/${crypto.randomUUID()}`);

      const uploadTask = uploadBytesResumable(imgRef, imgEl.current);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          btn.current.value = "Loading...";
          switch (snapshot.state) {
            case "paused":
             btn.current.value = "Upload is paused";
              break;
            case "running":
              btn.current.value = "Loading...";

              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            btn.current.value = "Success";
           
            let result = addData({ ...data, downloadURL, date }).then(result=>navigate('/'))
            
            
          });
        }
      );
    }
  };

  const upload = (e) => {
    imgEl.current = e.target.files[0];
  };

  return (
    <div className="min-h-[100dvh] py-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-1 px-2 text-white"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <Input
          type="text"
          label="name"
          register={register}
          required
          errors={errors?.name}
        />
        <Input
          type="text"
          label="father"
          register={register}
          required
          errors={errors?.father}
        />
        <Input
          type="text"
          label="mother"
          register={register}
          required
          errors={errors?.mother}
        />
        <div className="flex justify-between mt-2">
          <Input
            type="date"
            label="birth"
            register={register}
            required
            errors={errors?.birth}
          />
          <Input
            type="number"
            label="Fee"
            register={register}
            required
            errors={errors?.birth}
          />
        </div>

        <Input
          type="number"
          label="weight"
          register={register}
          required
          errors={errors?.weight}
        />
        <Input
          type="number"
          label="mobile"
          register={register}
          required
          errors={errors?.mobile}
        />
        <Input
          type="text"
          label="present"
          register={register}
          required
          errors={errors?.present}
        />
        <Input
          type="text"
          label="permanent"
          register={register}
          required
          errors={errors?.permanent}
        />
        <Input
          type="text"
          label="blood"
          register={register}
          required
          errors={errors?.blood}
        />
        <Input
          type="text"
          label="occupation"
          register={register}
          required
          errors={errors?.occupation}
        />

        <select {...register("month")} className="bg-transparent my-2">
          <option className="text-black" value="1">
            1 Month
          </option>
          <option className="text-black" value="3">
            3 Months
          </option>
          <option className="text-black" value="6">
            6 Months
          </option>
          <option className="text-black" value="12">
            1 Year
          </option>
        </select>

        <input type="file" name="file" ref={imgEl} onChange={upload} />

        <input
          className="border w-fit m-auto px-4 py-2 rounded-xl mt-4 cursor-pointer"
          type="submit"
          value="Submit"
          ref={btn}
        />
      </form>
    </div>
  );
}
